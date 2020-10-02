import { PageHead } from '../../components/PageHead';
import { BackButton } from '../../components/BackButton';
import React from 'react';
import { gql } from '@apollo/client/core';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetPracticeDetailSubscription,
  useGetPromotionForTpAddQuery,
} from '../../generated/graphql';
import { CardBox } from '../../components/CardBox';
import { Loader } from '../../components/Loader';
import { NewTpToPromo } from './NewTpToPromo';
import { Wip } from '../../components/Wip';

gql`
  subscription getPracticeDetail($id: uuid!) {
    practice_by_pk(id: $id) {
      title
      practice_yields_aggregate(order_by: { created_at: asc }) {
        aggregate {
          count
        }
        nodes {
          id
          name
          method
          meta
        }
      }
      practice_to_promotions_aggregate {
        aggregate {
          count
        }
        nodes {
          promotion {
            name
            years
            id
          }
          can_student_see_feedback
          can_student_see_grade
          close_date
          created_at
          gitea_org_name
          is_open
          id
          open_date
          updated_at
        }
      }
    }
  }
`;

gql`
  query getPromotionForTpAdd {
    promotion(order_by: { updated_at: asc }) {
      id
      name
      years
    }
  }
`;

export const TpId = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, loading } = useGetPracticeDetailSubscription({
    variables: { id },
  });
  const { data: promotions } = useGetPromotionForTpAddQuery();
  if (!loading && (!data?.practice_by_pk || error)) {
    navigate('../');
  }

  const practiceUsedId = (
    data?.practice_by_pk?.practice_to_promotions_aggregate.nodes ?? []
  )
    .map((it) => it.promotion)
    .map(({ id }) => id);

  const promotionAvailable = (promotions?.promotion ?? []).filter(
    ({ id }) => !practiceUsedId.includes(id),
  );

  return (
    <>
      <PageHead className="mb-4">
        <div className="flex items-center">
          <BackButton className="mr-2" /> {data?.practice_by_pk?.title ?? ''}
        </div>
      </PageHead>
      <Loader visible={loading}>
        <CardBox>
          <div className="font-bold text-xl">
            {(data &&
              data.practice_by_pk?.practice_yields_aggregate.aggregate
                ?.count) ??
              0}{' '}
            Yields
          </div>
          <ul className="list-disc pl-5 space-y-1">
            {data &&
              data.practice_by_pk?.practice_yields_aggregate.nodes.map(
                (value) => (
                  <li key={value.id}>
                    <span className="font-bold">{value.name}</span>
                    <span> using {value.method} as a way to handoff</span>
                  </li>
                ),
              )}
          </ul>
        </CardBox>

        <div className="mt-4 flex content-between justify-between items-baseline">
          <div className="text-xl font-bold">
            {
              data?.practice_by_pk?.practice_to_promotions_aggregate.aggregate
                ?.count
            }{' '}
            promotion
          </div>
          <NewTpToPromo tpId={id} promotions={promotionAvailable} />
        </div>

        <pre>
          {JSON.stringify(
            data?.practice_by_pk?.practice_to_promotions_aggregate?.nodes,
            null,
            2,
          )}{' '}
        </pre>
      </Loader>
      <Wip
        todo={[
          'Pretty list of practice to promotion',
          'Able to edit if the student can see feedback',
          'Able to edit if the student can see grade',
          'Able to edit the notation tools for the tp',
          'Able to edit the name of the tp',
          'Able to edit the yeilds',
          'Able to delete the practice',
          'Able to delete the practice to promotion',
        ]}
      />
    </>
  );
};
