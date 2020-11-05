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
import { Table } from '../../components/Table';
import { Chip } from '../../components/Chip';
import { format, formatDistanceToNowStrict } from 'date-fns';
import { enGB } from 'date-fns/locale';

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
            student_to_promotions {
              student {
                full_name
                email
                practice_to_students(
                  where: {
                    practice_to_promotion: { practice_id: { _eq: $id } }
                  }
                ) {
                  created_at
                  grade
                }
              }
            }
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

const FormatSingleDate: React.FC<{ date: Date; prefix: string }> = ({
  date,
  prefix,
}) => {
  return (
    <div>
      {`${prefix} `}
      <span className="font-semibold">
        {formatDistanceToNowStrict(date, {
          addSuffix: true,
          locale: enGB,
        })}
      </span>
      <span>{' at '}</span>
      <span className="font-semibold">
        {format(date, 'Pp', { locale: enGB })}
      </span>
    </div>
  );
};

const FormatDates: React.FC<{ open: Date; close: Date }> = ({
  open,
  close,
}) => {
  return (
    <div className="flex justify-between">
      <FormatSingleDate date={open} prefix="Open" />
      <FormatSingleDate date={close} prefix="Closes" />
    </div>
  );
};

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

        {data?.practice_by_pk?.practice_to_promotions_aggregate?.nodes.map(
          (promo) => {
            const amountLeft = promo.promotion.student_to_promotions
              .filter((data) => data.student?.practice_to_students.length === 0)
              .reduce((a) => a + 1, 0);
            return (
              <CardBox>
                <div className="leading-loose">
                  <span className="font-bold">{promo.promotion.name}</span>
                  <span>{` - ${promo.promotion.years}`}</span>
                </div>
                <div>
                  <FormatDates
                    open={new Date(promo.open_date)}
                    close={new Date(promo.close_date)}
                  />
                </div>
                <pre>{promo.can_student_see_feedback}</pre>
                <div>
                  Missing {amountLeft} handouts of{' '}
                  {promo.promotion.student_to_promotions.length}
                </div>
                <Table>
                  <Table.TableHead items={['Name', 'Email', 'Has handout']} />
                  <Table.TBody items={promo.promotion.student_to_promotions}>
                    {({ student }) => {
                      const hasStudentHandout =
                        student.practice_to_students.length > 0;
                      return (
                        <>
                          <Table.Td isMainInfo>{student?.full_name}</Table.Td>
                          <Table.Td>{student?.email}</Table.Td>
                          <Table.Td>
                            <Chip
                              variant={hasStudentHandout ? 'success' : 'error'}
                            >
                              {hasStudentHandout ? 'Yes' : 'No'}
                            </Chip>
                          </Table.Td>
                        </>
                      );
                    }}
                  </Table.TBody>
                </Table>
              </CardBox>
            );
          },
        )}
      </Loader>
      <Wip
        todo={[
          'Able to edit if the student can see feedback',
          'Able to edit if the student can see grade',
          'Able to edit the notation tools for the tp',
          'Able to edit the handout for practice to tp',
          'Able to edit the name of the tp',
          'Able to edit the yeilds',
          'Able to delete the practice',
          'Able to delete the practice to promotion',
        ]}
      />
    </>
  );
};
