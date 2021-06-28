import React from 'react';
import { PageHead } from '@/components/PageHead';
import gql from 'graphql-tag';
import { useHandoffListQuery } from '@/generated/graphql';
import { HandoffCourse } from '@/cmpToSort/HandoffCourse';
import { getLayoutRoleStudent } from '@/layouts/WithRole';

gql`
  query handoffList {
    course(order_by: { created_at: desc }) {
      ...HandoffCourse
    }
  }

  fragment HandoffCourse on course {
    name
    years
    id
    practice_to_courses(order_by: { close_date: desc }) {
      practice {
        title
        created_at
        id
      }
      practice_to_students {
        id
        student_id
        created_at
      }
      is_open
      open_date
      created_at
      close_date
      id
    }
  }
`;

export const HandOffIndex = () => {
  const [{ data }] = useHandoffListQuery({
    requestPolicy: 'network-only',
  });

  return (
    <>
      <PageHead>Handoff</PageHead>
      <div className="space-y-8 mt-4">
        {data?.course.map((item) => (
          <HandoffCourse course={item} key={item.id} />
        ))}
      </div>
    </>
  );
};
HandOffIndex.getLayout = getLayoutRoleStudent;

export default HandOffIndex;
