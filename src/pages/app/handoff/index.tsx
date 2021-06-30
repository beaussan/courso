import React from 'react';
import { PageHead } from '@/components/PageHead';
import { useHandoffListQuery } from '@/generated/graphql';
import { HandoffCourse } from '@/cmpToSort/HandoffCourse';
import { getLayoutRoleStudent } from '@/layouts/WithRole';

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
