import React from 'react';
import { useNavigate } from 'react-router';
import { PageHead } from '../../components/PageHead';
import { Button } from '../../components/Button';
import { gql } from '@apollo/client/core';
import { useListPracticeQuery } from '../../generated/graphql';
import { Wip } from '../../components/Wip';
import { Loader } from '../../components/Loader';
import { CardBox } from '../../components/CardBox';

gql`
  query ListPractice {
    practice {
      id
      title
      practice_to_promotions {
        id
        can_student_see_feedback
        can_student_see_grade
        close_date
        open_date
        promotion {
          name
          years
        }
      }
    }
  }
`;

export const TpList = () => {
  const navigate = useNavigate();
  const { loading, data } = useListPracticeQuery();

  return (
    <>
      <PageHead className="mb-4">
        <div className="flex content-between justify-between items-center">
          <span>TPs</span>
          <Button onClick={() => navigate('./new')}>Add new TP</Button>
        </div>
      </PageHead>
      <Loader visible={loading}>
        <div className="flex flex-col space-y-4">
          {data &&
            data.practice.map((data) => (
              <CardBox key={data.id} onClick={() => navigate(`./${data.id}`)}>
                <div>{data.title}</div>
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </CardBox>
            ))}
        </div>
      </Loader>
      <Wip todo={['Pretty list display', 'Practice detail']} />
    </>
  );
};
