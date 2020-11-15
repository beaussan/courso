import React from 'react';
import { PageHead } from '../../components/PageHead';
import { BackButton } from '../../components/BackButton';
import gql from 'graphql-tag';
import {
  Practice_Yield_Insert_Input,
  useCreateNewPracticeMutation,
} from '../../generated/graphql';
import { Loader } from '../../components/Loader';
import { useFetchYieldTypes } from '../../hooks/useFetchYieldTypes';
import { FieldArray, Form, Formik } from 'formik';
import { Input, TextArea } from '../../components/Input';
import { Button } from '../../components/Button';
import { ReactComponent as Add } from '../../icons/outline/plus.svg';
import * as yup from 'yup';
import { YieldInput } from './YieldInput';
import { CardBox } from '../../components/CardBox';
import { useFormikMutationSubmit } from '../../hooks/useFormikMutationSubmit';

gql`
  mutation createNewPractice(
    $title: String!
    $description: String!
    $data: [practice_yield_insert_input!]!
  ) {
    insert_practice_one(
      object: {
        title: $title
        description: $description
        practice_yields: { data: $data }
      }
    ) {
      created_at
      id
      title
      updated_at
    }
  }
`;

interface NewTp {
  title: string;
  description: string;
  yields: [
    {
      name: string;
      method: string;
    },
  ];
}

export const TpNew = () => {
  const { data: yieldTypes, loading } = useFetchYieldTypes();
  const [{}, createTp] = useCreateNewPracticeMutation();
  const onSubmit = useFormikMutationSubmit({
    mutation: createTp,
    successMessage: 'TP added successfully',
    mapFormData: (values: NewTp) => ({
      data: values.yields as Practice_Yield_Insert_Input[],
      title: values.title,
      description: values.description,
    }),
  });

  return (
    <>
      <PageHead className="">
        <div className="flex items-center">
          <BackButton className="mr-2" /> New TP
        </div>
      </PageHead>
      <Loader visible={loading}>
        <CardBox>
          <Formik
            initialValues={{
              title: '',
              description: '',
              yields: [
                {
                  name: '',
                  method: 'GIT_REPO',
                },
              ],
            }}
            validationSchema={yup
              .object()
              .shape({
                title: yup.string().required('Title is required'),
                description: yup.string().notRequired(),
                yields: yup
                  .array()
                  .of(
                    yup.object().shape({
                      name: yup.string().required('Name is required'),
                      description: yup
                        .string()
                        .required('Description is required'),
                      method: yup
                        .string()
                        .oneOf(yieldTypes)
                        .required('Method is required'),
                    }),
                  )
                  .required()
                  .min(1),
              })
              .required()}
            onSubmit={onSubmit}
          >
            {({ isValid, isValidating, values }) => (
              <Form className="flex flex-col">
                <div className="text-xl font-bold pt-2 pb-4">
                  Tp informations
                </div>
                <Input label="Title" type="text" name="title" />
                <TextArea label="Description" type="text" name="description" />
                <FieldArray name="yields">
                  {({ push, remove }) => (
                    <>
                      <div className="flex content-between font-bold justify-between items-center pt-6 pb-4">
                        <div className="text-xl font-bold">Students yield</div>

                        <Button
                          onClick={() =>
                            push({
                              name: '',
                              method: yieldTypes[0],
                            })
                          }
                          Icon={Add}
                          type="button"
                          variant="secondary"
                        >
                          Add new yield from student
                        </Button>
                      </div>
                      <div className="mb-4 flex flex-col">
                        <div>
                          Right now, we only support two way for student to
                          yield answers : BLOB or GIT_REPO
                        </div>
                        <div>
                          <span className="font-bold">BLOB</span> : a content as
                          a string, for now
                        </div>
                        <div>
                          <span className="font-bold">GIT_REPO</span> : a git
                          repo url that will be copied into a selfhosted git.
                          You will be able to read content of the git for the
                          correction.
                        </div>
                      </div>
                      <div className="space-y-12">
                        {(values?.yields || []).map((data, idx) => (
                          <YieldInput
                            key={idx}
                            baseName={`yields.${idx}`}
                            yieldTypes={yieldTypes}
                            remove={() => remove(idx)}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </FieldArray>
                <Button
                  isFull
                  disabled={!isValid || isValidating}
                  type="submit"
                  className="mt-5"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </CardBox>
      </Loader>
    </>
  );
};
