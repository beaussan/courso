import React from 'react';
import { PageHead } from '@/components/PageHead';
import { BackButton } from '@/components/BackButton';
import gql from 'graphql-tag';
import {
  useCourseDetailsQuery,
  useSendStudentClaimMailMutation,
} from '@/generated/graphql';
import { Loader } from '@/components/Loader';
import { Wip } from '@/components/Wip';
import { ButtonWithConfirm } from '@/components/ButtonWithConfirm';
import { Table } from '@/components/Table';
import { Chip } from '@/components/Chip';
import { useToasts } from 'react-toast-notifications';
import { getLayoutRoleTeacher } from '@/layouts/WithRole';
import { useRouter } from 'next/router';
import { routes } from '@/routGetters';

gql`
  query courseDetails($id: uuid!) {
    course_by_pk(id: $id) {
      name
      years
      student_to_courses_aggregate {
        nodes {
          student {
            id
            email
            full_name
            user_id
          }
        }
        aggregate {
          count
        }
      }
    }
  }
  mutation sendStudentClaimMail($studentsIds: [uuid]!) {
    sendStudentClaimMail(studentsIds: $studentsIds) {
      nmbMailSent
    }
  }
`;

const LinkIndicator: React.FC<{ isLinked: boolean }> = ({ isLinked }) => {
  const label = isLinked ? 'Yes' : 'No';
  return <Chip variant={isLinked ? 'success' : 'error'}>{label}</Chip>;
};

export const CourseId = () => {
  const router = useRouter();
  const { courseId } = router.query;

  const [{ data, error, fetching }] = useCourseDetailsQuery({
    variables: { id: courseId },
  });
  const { addToast } = useToasts();
  const [, sendStudentMail] = useSendStudentClaimMailMutation();

  if (fetching) {
    return <Loader />;
  }
  if (!data?.course_by_pk || error) {
    router.push(routes.courseList());
    return <Loader />;
  }

  const onSendStudent = async () => {
    try {
      if (!data?.course_by_pk?.student_to_courses_aggregate?.nodes) {
        return;
      }
      const studentsIds = data.course_by_pk.student_to_courses_aggregate.nodes.map(
        ({ student }) => student.id,
      );
      const { data: dataMutation, error } = await sendStudentMail({
        studentsIds,
      });
      if (error) {
        throw error;
      }
      addToast(
        `${dataMutation?.sendStudentClaimMail?.nmbMailSent} mail sent !`,
        {
          appearance: 'success',
        },
      );
    } catch (e) {
      console.error(e);
      addToast('A problem occurred while sending the mail.', {
        appearance: 'error',
      });
    }
  };

  return (
    <>
      <PageHead className="">
        <div className="flex items-center">
          <BackButton className="mr-2" />{' '}
          {data?.course_by_pk?.name ?? 'Promo name'}
          {' - '}
          {data?.course_by_pk?.years}
        </div>
      </PageHead>
      <div className="bg-white mt-4 p-4 rounded-lg shadow-md">
        <div className="flex justify-between mb-2">
          <div className="text-xl font-medium pb-4">Students</div>
          <ButtonWithConfirm
            onClick={onSendStudent}
            variant="confirm"
            actionLabel="send mail to link students"
            buttonLabel="Send connectin link"
          />
        </div>
        <Table>
          <Table.TableHead items={['Name', 'Email', 'Is linked']} />
          <Table.TBody
            items={data?.course_by_pk?.student_to_courses_aggregate.nodes ?? []}
          >
            {({ student }) => (
              <>
                <Table.Td isMainInfo>{student?.full_name}</Table.Td>
                <Table.Td>{student?.email}</Table.Td>
                <Table.Td>
                  <LinkIndicator isLinked={!!student.user_id} />
                </Table.Td>
              </>
            )}
          </Table.TBody>
        </Table>
      </div>

      <Wip
        todo={[
          'Edit promo name and year',
          'Edit promotion students',
          'remove student from promotion with validation',
        ]}
      />
    </>
  );
};

CourseId.getLayout = getLayoutRoleTeacher;

export default CourseId;
