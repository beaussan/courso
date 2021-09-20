import { ActionMap } from './types';
import { gqlSdk } from '@lib/gql';
import { isBefore } from 'date-fns';
import {
  Practice_To_Student_Insert_Input,
  PracticeForGradingFragment,
  PracticeToStudentForGradingFragment,
} from '@lib/generated/graphql';
import { HttpsError } from '@lib/common/HttpsError';
import { createLogger } from '@lib/common/log';

const logger = createLogger({ component: 'refreshGrades' });

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
                  throw new HttpsError(
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

export const refreshGrades: ActionMap['refreshGrades'] = async ({
  course_id,
  practice_id,
}) => {
  const {
    practice_to_course: rawPractice,
  } = await gqlSdk.getPracticeToGradeByCourseIdAndPracticeId({
    course_id,
    practice_id,
  });
  if (!rawPractice || rawPractice.length === 0) {
    throw new HttpsError('not-found', 'Not found');
  }
  const rawPracticeToCourse = rawPractice[0];
  if (rawPracticeToCourse.is_open) {
    throw new HttpsError('not-found', 'Not found');
  }

  const openDate = new Date(rawPracticeToCourse.open_date);
  if (isBefore(new Date(), openDate) || rawPracticeToCourse.is_open) {
    throw new HttpsError('invalid-argument', 'Practice is not over yet');
  }

  await gqlSdk.fillEmptyForGrade({
    courseId: course_id,
    practiceId: practice_id,
  });

  const {
    practice_to_course_by_pk,
  } = await gqlSdk.dataForPracticeToGradeByPracticeToCoursePk({
    practice_to_grade_id: rawPracticeToCourse.practiceToCourseId,
  });

  const practice = practice_to_course_by_pk?.practice;
  const practiceToStudents = practice_to_course_by_pk?.practice_to_students;

  if (!practice || !practiceToStudents) {
    throw new HttpsError(
      'internal',
      'No practice to student or practice found, should not happends',
    );
  }

  const mappedData = getMappedDataFromPractice(practice);
  const maxGrade = getMaxGrade(mappedData);

  const toSave = practiceToStudents.map((student) =>
    mapStudentForGradingToInput(student, maxGrade, mappedData),
  );

  const {
    insert_practice_to_student,
  } = await gqlSdk.insertPracticeToStudentWithGrades({
    objects: toSave,
  });

  return {
    affected_rows: insert_practice_to_student?.affected_rows || 0,
  };
};
