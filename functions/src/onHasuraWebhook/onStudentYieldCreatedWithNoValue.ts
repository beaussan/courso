import { handlerFn } from './types';
import { gql } from 'graphql-request';
import { gqlClient } from '../config';
import {
  SetSubmitedFalseOnEmptyMutation,
  SetSubmitedFalseOnEmptyMutationVariables,
} from '../generated/graphql';

interface YieldFromEvent {
  id: string;
  value?: string;
}

const ON_STUDENT_YIELD_MUTATION = gql`
  mutation setSubmitedFalseOnEmpty($id: uuid!) {
    update_practice_to_student_yield_by_pk(
      pk_columns: { id: $id }
      _set: { submited: false }
    ) {
      gitea_org_and_repo
    }
  }
`;

export const onStudentYieldCreatedWithNoValue: handlerFn<YieldFromEvent> = async (
  data,
) => {
  const after = data.event.data.new;

  if (!after) {
    return 'no after';
  }
  if (after.value && after?.value?.trim().length > 0) {
    return 'value set';
  }

  await gqlClient.request<
    SetSubmitedFalseOnEmptyMutation,
    SetSubmitedFalseOnEmptyMutationVariables
  >(ON_STUDENT_YIELD_MUTATION, {
    id: after.id,
  });

  return 'ok';
};
