import React from 'react';
import { PageHead } from '../../components/PageHead';
import { BackButton } from '../../components/BackButton';
import { useNavigate, useParams } from 'react-router-dom';
import { gql } from '@apollo/client/core';
import {
  HandOffByIdQuery,
  useHandOffByIdQuery,
  useSubmitHandoffMutation,
} from '../../generated/graphql';
import { DebugJson } from '../../components/DebugJson';
import { Loader } from '../../components/Loader';
import {
  formatDuration,
  intervalToDuration,
  isAfter,
  isBefore,
  max,
} from 'date-fns';
import { useTimeInterval } from '../../hooks/useTimeInterval';
import { enGB } from 'date-fns/locale';
import { Input } from '../../components/Input';
import { CardBox } from '../../components/CardBox';
import { Form, Formik } from 'formik';
import { Alert } from '../../components/Alert';
import * as yup from 'yup';
import { Button } from '../../components/Button';
import { useFormikMutationSubmit } from '../../hooks/useFormikMutationSubmit';

gql`
  query HandOffById($id: uuid!) {
    practice_to_promotion_by_pk(id: $id) {
      practice {
        title
        description
        created_at
        id
        practice_yields {
          id
          meta
          method
          name
          description
        }
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

  mutation submitHandoff(
    $practiceToPromotionId: uuid!
    $yields: [YieldForHandoff!]!
  ) {
    submitHandoff(
      practiceToPromotionId: $practiceToPromotionId
      yields: $yields
    ) {
      status
    }
  }
`;

const GitField = ({
  name,
  label,
  description,
}: {
  name: string;
  label: string;
  description: string;
}) => {
  return (
    <div>
      <div className="mb-1 text-lg leading-relaxed">{label}</div>
      <div className="font-light mb-3">{description}</div>
      <Input label="Git HTTP(S) url" name={`${name}.value`} />
    </div>
  );
};

interface HandoffForm {
  [key: string]: {
    value: string;
  };
}

const HandOffBody: React.FC<{ data: HandOffByIdQuery }> = ({ data }) => {
  useTimeInterval(1);
  const [submitHandoff, { loading }] = useSubmitHandoffMutation();
  const currDate = new Date();
  const close = new Date(data.practice_to_promotion_by_pk?.close_date);
  const open = new Date(data.practice_to_promotion_by_pk?.open_date);
  const isOpen = isAfter(currDate, open) && isBefore(currDate, close);
  const onSubmit = useFormikMutationSubmit({
    mutation: submitHandoff,
    successMessage: 'Succesfully submit handoff',
    mapFormData: (values: HandoffForm) => ({
      practiceToPromotionId: data?.practice_to_promotion_by_pk?.id,
      yields: Object.entries(values).map(([yieldId, { value }]) => ({
        value,
        yieldId,
      })),
    }),
    navigateDestination: undefined,
  });

  const timeLeft = formatDuration(
    intervalToDuration({
      start: max([currDate, open]),
      end: close,
    }),
    { locale: enGB },
  );

  if (!isOpen) {
    return (
      <div className="mt-4 font-semibold text-xl">This handoff is over.</div>
    );
  }
  const yeilds =
    data?.practice_to_promotion_by_pk?.practice?.practice_yields ?? [];
  const initialValues: HandoffForm = yeilds
    .map(({ id }) => ({ [id]: { value: '' } }))
    .reduce((prev, curr) => ({ ...prev, ...curr }), {});
  return (
    <CardBox>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={yup.object(
          yeilds
            .map(({ id }) => ({
              [id]: yup.object({
                value: yup
                  .string()
                  .url('Git url is not a valid url')
                  .required('Git url missing'),
              }),
            }))
            .reduce((prev, curr) => ({ ...prev, ...curr }), {}),
        )}
      >
        {({ isValid, isValidating, values }) => (
          <Form className="flex flex-col">
            <Alert title="Be carefull">
              All handoff are <span className="font-semibold">permanent</span>,
              and{' '}
              <span className="font-semibold">no second try can be done.</span>.
              <br />
              All git url will be{' '}
              <span className="font-semibold">
                cloned when you click submit
              </span>
              , so{' '}
              <span className="font-semibold">
                any new commit will be ignored.
              </span>
              <br />
              <span>
                It should be <span className="font-semibold">public.</span>
              </span>
            </Alert>
            <div className="my-4 font-semibold">What you need to handoff :</div>
            {yeilds.map(({ name, id, description }) => (
              <GitField
                key={id}
                name={id}
                label={name}
                description={description}
              />
            ))}
            <Loader visible={loading}>
              <Button
                isFull
                disabled={!isValid || isValidating}
                type="submit"
                className="mt-5"
              >
                Submit
              </Button>
            </Loader>
          </Form>
        )}
      </Formik>

      <div className="mt-4">
        You have <span className="font-semibold">{timeLeft}</span> left
      </div>
    </CardBox>
  );
};

export const HandOffId = () => {
  const { handoffId } = useParams();
  const navigate = useNavigate();
  const { data, error, loading } = useHandOffByIdQuery({
    variables: { id: handoffId },
  });
  if (!loading && (!data?.practice_to_promotion_by_pk || error)) {
    navigate('../');
  }

  if (
    (data?.practice_to_promotion_by_pk?.practice_to_students?.length ?? 0) > 0
  ) {
    navigate('../');
  }
  let body = <div />;
  if (data) {
    body = <HandOffBody data={data} />;
  }
  return (
    <>
      <Loader visible={loading}>
        <PageHead className="">
          <div className="flex items-center">
            <BackButton className="mr-2" />
            {'Handoff for '} {data?.practice_to_promotion_by_pk?.practice.title}
          </div>
        </PageHead>
        {body}
        <DebugJson json={data} />
      </Loader>
    </>
  );
};
