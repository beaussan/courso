import {
  Student_Constraint,
  Student_Insert_Input,
  Student_To_Course_Insert_Input,
  Student_Update_Column,
} from '@/generated/graphql';
import { parse } from 'papaparse';
import * as yup from 'yup';

type PartialStudent = Required<
  Pick<Student_Insert_Input, 'first_name' | 'last_name' | 'email'>
>;

export const parseCsv = (data: string): PartialStudent[] => {
  return parse<string[]>(data)
    .data.filter((value) => value.length >= 3)
    .map(
      ([first_name, last_name, email]): PartialStudent => ({
        first_name,
        last_name,
        email,
      }),
    );
};

export const mapToSave = (
  students: PartialStudent[],
): Student_To_Course_Insert_Input[] =>
  students.map((data) => ({
    student: {
      data,
      on_conflict: {
        constraint: Student_Constraint.StudentEmailKey,
        update_columns: [
          Student_Update_Column.FirstName,
          Student_Update_Column.LastName,
        ],
      },
    },
  }));

export const studentValidator = yup
  .array(
    yup
      .object()
      .shape({
        first_name: yup.string().required(),
        last_name: yup.string().required(),
        email: yup.string().email().required(),
      })
      .required(),
  )
  .required('No student found')
  .min(1);
