import { PageHead } from '../../components/PageHead';
import { BackButton } from '../../components/BackButton';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPracticeForGradeMetricQuery } from '../../generated/graphql';
import { Wip } from '../../components/Wip';
import gql from 'graphql-tag';
import { Loader } from '../../components/Loader';
import { NewGradeMetricInput } from './NewGradeMetricInput';

gql`
  query getPracticeForGradeMetric($id: uuid!) {
    practice_by_pk(id: $id) {
      id
      title
    }
  }
`;

export const NewTpGradeMetrics = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [{ data, error, fetching }] = useGetPracticeForGradeMetricQuery({
    variables: { id },
    pollInterval: 10000,
  });

  if (fetching) {
    return <Loader />;
  }
  if (!data?.practice_by_pk || error) {
    navigate('../');
  }

  return (
    <>
      <PageHead className="mb-4">
        <div className="flex items-center">
          <BackButton className="mr-2" /> {data?.practice_by_pk?.title ?? ''}
        </div>
      </PageHead>
      <NewGradeMetricInput tpId={id} onTpNotFound={() => navigate('../')} />
      <Wip todo={['Able to see old inputs']} />
    </>
  );
};
