import React from 'react';
import { useNavigate } from 'react-router';
import { PageHead } from '../../components/PageHead';
import { Button } from '../../components/Button';
import gql from 'graphql-tag';
import {
  Maybe,
  Promotion,
  Student_To_Promotion_Aggregate_Fields,
  useListPromotionsQuery,
} from '../../generated/graphql';
import { Loader } from '../../components/Loader';
import { CardBox } from '../../components/CardBox';

gql`
  query ListPromotions {
    promotion {
      id
      name
      years
      student_to_promotions_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

type CardType = Pick<Promotion, 'name' | 'years' | 'id'> & {
  student_to_promotions_aggregate: {
    __typename?: 'student_to_promotion_aggregate';
  } & {
    aggregate?: Maybe<
      { __typename?: 'student_to_promotion_aggregate_fields' } & Pick<
        Student_To_Promotion_Aggregate_Fields,
        'count'
      >
    >;
  };
};

const PromoCard: React.FC<{ data: CardType }> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <CardBox onClick={() => navigate(`./${data.id}`)}>
      <div>
        <span className="font-semibold">{data.name}</span>
        {' - '}
        <span>{data.years}</span>
      </div>
      <div className="text-gray-600">
        {data.student_to_promotions_aggregate.aggregate?.count} students
      </div>
    </CardBox>
  );
};

export const PromotionIndex = () => {
  const navigate = useNavigate();
  const [{ data }] = useListPromotionsQuery();

  return (
    <>
      <PageHead className="mb-4">
        <div className="flex content-between justify-between items-center">
          <span>Promotions</span>
          <Button onClick={() => navigate('./new')}>Add new promotion</Button>
        </div>
      </PageHead>

      <div className="space-y-4">
        {data?.promotion.map((data) => (
          <PromoCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};
