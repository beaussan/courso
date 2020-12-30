import { ActionFn, fillEmptyYieldsArgs, FillEmptyYieldsOutput } from './types';
import { isBefore } from 'date-fns';
import { gql } from 'graphql-request';
import { gqlClient } from '../config';
import { https } from 'firebase-functions';
import {
  DataForPracticeToGradeEmptyQuery,
  DataForPracticeToGradeEmptyQueryVariables,
  Practice_To_Student_Insert_Input,
  Practice_To_Student_Yield_Constraint,
  Practice_To_Student_Yield_Update_Column,
  UpdateFillEmptyHandoutsMutation,
  UpdateFillEmptyHandoutsMutationVariables,
} from '../generated/graphql';

const GET_DATA_TO_FILL_EMPTY_HANDOUTS = gql`
  query dataForPracticeToGradeEmpty($course_id: uuid!, $practice_id: uuid!) {
    practice_to_course(
      where: {
        course_id: { _eq: $course_id }
        practice_id: { _eq: $practice_id }
      }
    ) {
      id
      is_open
      open_date
      course {
        id
        student_to_courses {
          student {
            id
            practice_to_students(
              where: {
                practice_to_course: {
                  course_id: { _eq: $course_id }
                  practice_id: { _eq: $practice_id }
                }
              }
            ) {
              id
              student_id
              created_at
              practice_to_student_yields {
                id
                value
                practice_yield_id
              }
            }
          }
        }
      }
      practice {
        practice_yields {
          id
        }
      }
    }
  }
`;

const UPDATE_FILL_EMPTY_HANDOUTS = gql`
  mutation updateFillEmptyHandouts(
    $data: [practice_to_student_insert_input!]!
  ) {
    insert_practice_to_student(
      on_conflict: {
        constraint: practice_to_student_student_id_promotion_practice_id_key
        update_columns: course_practice_id
      }
      objects: $data
    ) {
      affected_rows
    }
  }
`;

export const fillEmptyYields: ActionFn<
  fillEmptyYieldsArgs,
  FillEmptyYieldsOutput
> = async ({ course_id, practice_id }) => {
  const { practice_to_course } = await gqlClient.request<
    DataForPracticeToGradeEmptyQuery,
    DataForPracticeToGradeEmptyQueryVariables
  >(GET_DATA_TO_FILL_EMPTY_HANDOUTS, {
    practice_id,
    course_id,
  });
  if (!practice_to_course || practice_to_course.length === 0) {
    throw new https.HttpsError('not-found', 'Not found');
  }
  const practiceToCourse = practice_to_course[0];
  if (practiceToCourse.is_open) {
    throw new https.HttpsError('invalid-argument', 'Practice is still open');
  }

  const openDate = new Date(practiceToCourse.open_date);
  if (isBefore(new Date(), openDate) || practiceToCourse.is_open) {
    throw new https.HttpsError('invalid-argument', 'Practice is not over yet');
  }

  const yieldsId: string[] = practiceToCourse.practice.practice_yields.map(
    (value) => value.id,
  );

  const dataToSave = practiceToCourse.course.student_to_courses.map(
    (data): Practice_To_Student_Insert_Input => {
      return {
        id: data.student.practice_to_students[0]?.id ?? undefined,
        course_practice_id: practiceToCourse.id,
        submited: false,
        student_id: data.student.id,
        practice_to_student_yields: {
          data: yieldsId.map((id) => ({
            practice_yield_id: id,
            value: '',
            submited: false,
          })),
          on_conflict: {
            constraint:
              Practice_To_Student_Yield_Constraint.StudentPracticeYieldPracticeYieldIdPracticeToStudenKey,
            update_columns: [
              Practice_To_Student_Yield_Update_Column.PracticeYieldId,
            ],
          },
        },
      };
    },
  );

  const { insert_practice_to_student } = await gqlClient.request<
    UpdateFillEmptyHandoutsMutation,
    UpdateFillEmptyHandoutsMutationVariables
  >(UPDATE_FILL_EMPTY_HANDOUTS, { data: dataToSave });

  return { affected_rows: insert_practice_to_student?.affected_rows ?? 0 };
};
