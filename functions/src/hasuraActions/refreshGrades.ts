import { ActionFn, refreshGradesArgs, RefreshGradesOutput } from './types';
import { gql } from 'graphql-request';
import { gqlClient } from '../config';
import {
  DataForPracticeToGradeQuery,
  DataForPracticeToGradeQueryVariables,
  FillEmptyForGradeMutation,
  FillEmptyForGradeMutationVariables,
  GetPracticeToGradeByCourseIdAndPracticeIdQuery,
  GetPracticeToGradeByCourseIdAndPracticeIdQueryVariables,
  InsertPracticeToStudentWithGradesMutation,
  InsertPracticeToStudentWithGradesMutationVariables,
  Practice_To_Student_Insert_Input,
  PracticeForGradingFragment,
  PracticeToStudentForGradingFragment,
} from '../generated/graphql';
import { https, logger } from 'firebase-functions';
import { isBefore } from 'date-fns';

const FILL_EMPTY_GRADES = gql`
  mutation fillEmptyForGrade($courseId: uuid!, $practiceId: uuid!) {
    fillEmptyYields(course_id: $courseId, practice_id: $practiceId) {
      affected_rows
    }
  }
`;

const GET_PRACTICE_TO_GRADE = gql`
  query getPracticeToGradeByCourseIdAndPracticeId(
    $course_id: uuid!
    $practice_id: uuid!
  ) {
    practice_to_course(
      where: {
        course_id: { _eq: $course_id }
        practice_id: { _eq: $practice_id }
      }
    ) {
      practiceToCourseId: id
      can_student_see_feedback
      can_student_see_grade
      is_open
      open_date
    }
  }
`;

const INSERT_PRACTICE_TO_STUDENTS = gql`
  mutation insertPracticeToStudentWithGrades(
    $objects: [practice_to_student_insert_input!]!
  ) {
    insert_practice_to_student(
      objects: $objects
      on_conflict: {
        constraint: practice_to_student_pkey
        update_columns: [grade, grade_detail, graded, feedback]
      }
    ) {
      affected_rows
    }
  }
`;

const GET_DATA_FOR_PRACTICE_TO_GRADE = gql`
  fragment PracticeForGrading on practice {
    practice_yields {
      id
      name
      practice_yield_expected_outputs {
        id
        practice_yield_grade_metrics {
          id
          name
          points
        }
      }
    }
  }
  fragment PracticeToStudentYieldForGrading on practice_to_student_yield {
    id
    submited
    practice_yield_id
    practice_to_student_grade_metrics {
      id
      feedback
      percent_grade
      practice_yield_grade_metric_id
      practice_yield_grade_metric {
        name
        points
      }
    }
  }
  fragment PracticeToStudentForGrading on practice_to_student {
    id
    course_practice_id
    graded
    grade
    student_id
    practice_to_student_yields {
      ...PracticeToStudentYieldForGrading
    }
  }
  query dataForPracticeToGrade($practice_to_grade_id: uuid!) {
    practice_to_course_by_pk(id: $practice_to_grade_id) {
      id
      practice {
        ...PracticeForGrading
      }
      practice_to_students {
        ...PracticeToStudentForGrading
      }
    }
  }
`;

interface DataOfYields {
  [yieldId: string]: {
    yieldName: string;
    metrics: {
      [metricId: string]: {
        name: string;
        points: number;
      };
    };
  };
}

const getMappedDataFromPractice = (
  practice: PracticeForGradingFragment,
): DataOfYields => {
  return practice.practice_yields
    .map(
      (yieldItem): DataOfYields => {
        return {
          [yieldItem.id]: {
            yieldName: yieldItem.name,
            metrics: yieldItem.practice_yield_expected_outputs
              .map((itm) => itm.practice_yield_grade_metrics)
              .reduce((prev, curr) => [...prev, ...curr], [])
              .map((item) => ({
                [item.id]: {
                  name: item.name,
                  points: item.points,
                },
              }))
              .reduce((prev, curr) => ({ ...prev, ...curr }), {}),
          },
        };
      },
    )
    .reduce((prev, curr) => ({ ...prev, ...curr }), {});
};

const getMaxGrade = (dataYields: DataOfYields): number => {
  return Object.values(dataYields)
    .map((yieldItem) =>
      Object.values(yieldItem.metrics)
        .map((val) => val.points)
        .reduce((prev, curr) => prev + curr, 0),
    )
    .reduce((prev, curr) => prev + curr, 0);
};

const getGradeTo20 = (grade: number, maxGrade: number): number => {
  return Math.round(((grade * 20) / maxGrade) * 100) / 100;
};

interface FullDataToGrade {
  [yieldId: string]: {
    yieldName: string;
    metrics: {
      [metricId: string]: {
        name: string;
        points: number;
        grade: number;
        feedbacks: string[];
      };
    };
  };
}

interface FeedbacksDataToGrade {
  [yieldId: string]: {
    yieldName: string;
    metrics: {
      [metricId: string]: {
        name: string;
        feedbacks: string[];
      };
    };
  };
}

const mapStudentForGradingToInput = (
  studentData: PracticeToStudentForGradingFragment,
  maxGrade: number,
  yieldData: DataOfYields,
): Practice_To_Student_Insert_Input => {
  const mappedWithAll = studentData.practice_to_student_yields
    .map(
      (yieldItem): FullDataToGrade => {
        const yieldItemRefData = yieldData[yieldItem.practice_yield_id];
        logger.debug('Item value : ', {
          yieldItem,
          isVoid: !yieldItem.submited,
        });
        if (!yieldItem.submited) {
          return {
            [yieldItem.id]: {
              yieldName: yieldItemRefData.yieldName,
              metrics: Object.entries(yieldItemRefData.metrics)
                .map(([key, value]) => ({
                  [key]: {
                    name: value.name,
                    points: value.points,
                    grade: 0,
                    feedbacks: ['No answer'],
                  },
                }))
                .reduce((prev, curr) => ({ ...prev, ...curr }), {}),
            },
          };
        }

        return {
          [yieldItem.id]: {
            yieldName: yieldItemRefData.yieldName,
            metrics: Object.entries(yieldItemRefData.metrics)
              .map(([key, value]) => {
                const gradeOfUser = yieldItem.practice_to_student_grade_metrics.find(
                  (item) => item.practice_yield_grade_metric_id === key,
                );
                if (!gradeOfUser) {
                  throw new https.HttpsError(
                    'invalid-argument',
                    `Grading is not all done yet`,
                  );
                }
                return {
                  [key]: {
                    name: value.name,
                    points: value.points,
                    grade: gradeOfUser.percent_grade * value.points,
                    feedbacks: gradeOfUser.feedback,
                  },
                };
              })
              .reduce((prev, curr) => ({ ...prev, ...curr }), {}),
          },
        };
      },
    )
    .reduce((prev, curr) => ({ ...prev, ...curr }), {});

  const feedbackOnly: FeedbacksDataToGrade = Object.entries(mappedWithAll)
    .map(([keyId, val]) => ({
      [keyId]: {
        yieldName: val.yieldName,
        metrics: Object.entries(val.metrics)
          .map(([metricId, metricValue]) => ({
            [metricId]: {
              name: metricValue.name,
              feedbacks: metricValue.feedbacks,
            },
          }))
          .reduce((prev, curr) => ({ ...prev, ...curr }), {}),
      },
    }))
    .reduce((prev, curr) => ({ ...prev, ...curr }), {});

  const gradeOverMax = Object.values(mappedWithAll)
    .map((val) => val.metrics)
    .map((itm) =>
      Object.values(itm)
        .map((data) => data.grade)
        .reduce((prev, curr) => prev + curr, 0),
    )
    .reduce((prev, curr) => prev + curr, 0);

  return {
    id: studentData.id,
    student_id: studentData.student_id,
    course_practice_id: studentData.course_practice_id,
    graded: true,
    grade: getGradeTo20(gradeOverMax, maxGrade),
    grade_detail: {
      maxGrade,
      gradeOverMax,
      detail: mappedWithAll,
    },
    feedback: feedbackOnly,
  };
};

export const refreshGrades: ActionFn<
  refreshGradesArgs,
  RefreshGradesOutput
> = async ({ course_id, practice_id }) => {
  const { practice_to_course: rawPractice } = await gqlClient.request<
    GetPracticeToGradeByCourseIdAndPracticeIdQuery,
    GetPracticeToGradeByCourseIdAndPracticeIdQueryVariables
  >(GET_PRACTICE_TO_GRADE, {
    course_id,
    practice_id,
  });
  if (!rawPractice || rawPractice.length === 0) {
    throw new https.HttpsError('not-found', 'Not found');
  }
  const rawPracticeToCourse = rawPractice[0];
  if (rawPracticeToCourse.is_open) {
    throw new https.HttpsError('not-found', 'Not found');
  }

  const openDate = new Date(rawPracticeToCourse.open_date);
  if (isBefore(new Date(), openDate) || rawPracticeToCourse.is_open) {
    throw new https.HttpsError('invalid-argument', 'Practice is not over yet');
  }

  await gqlClient.request<
    FillEmptyForGradeMutation,
    FillEmptyForGradeMutationVariables
  >(FILL_EMPTY_GRADES, {
    courseId: course_id,
    practiceId: practice_id,
  });

  const { practice_to_course_by_pk } = await gqlClient.request<
    DataForPracticeToGradeQuery,
    DataForPracticeToGradeQueryVariables
  >(GET_DATA_FOR_PRACTICE_TO_GRADE, {
    practice_to_grade_id: rawPracticeToCourse.practiceToCourseId,
  });

  const practice = practice_to_course_by_pk?.practice;
  const practiceToStudents = practice_to_course_by_pk?.practice_to_students;

  if (!practice || !practiceToStudents) {
    throw new https.HttpsError(
      'internal',
      'No practice to student or practice found, should not happends',
    );
  }

  const mappedData = getMappedDataFromPractice(practice);
  const maxGrade = getMaxGrade(mappedData);

  const toSave = practiceToStudents.map((student) =>
    mapStudentForGradingToInput(student, maxGrade, mappedData),
  );

  const result = await gqlClient.request<
    InsertPracticeToStudentWithGradesMutation,
    InsertPracticeToStudentWithGradesMutationVariables
  >(INSERT_PRACTICE_TO_STUDENTS, {
    objects: toSave,
  });

  return {
    affected_rows: result.insert_practice_to_student?.affected_rows || 0,
  };
};
