import { ActionMap } from './types';
import { isBefore } from 'date-fns';
import { gqlSdk } from '@lib/gql';
import {
  Practice_To_Student_Insert_Input,
  Practice_To_Student_Yield_Constraint,
  Practice_To_Student_Yield_Update_Column,
} from '@lib/generated/graphql';
import { HttpsError } from '@lib/common/HttpsError';

export const fillEmptyYields: ActionMap['fillEmptyYields'] = async ({
  course_id,
  practice_id,
}) => {
  const { practice_to_course } = await gqlSdk.dataForPracticeToGradeEmpty({
    practice_id,
    course_id,
  });
  if (!practice_to_course || practice_to_course.length === 0) {
    throw new HttpsError('not-found', 'Not found');
  }
  const practiceToCourse = practice_to_course[0];
  if (practiceToCourse.is_open) {
    throw new HttpsError('invalid-argument', 'Practice is still open');
  }

  const openDate = new Date(practiceToCourse.open_date);
  if (isBefore(new Date(), openDate) || practiceToCourse.is_open) {
    throw new HttpsError('invalid-argument', 'Practice is not over yet');
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

  const { insert_practice_to_student } = await gqlSdk.updateFillEmptyHandouts({
    data: dataToSave,
  });

  return { affected_rows: insert_practice_to_student?.affected_rows ?? 0 };
};
