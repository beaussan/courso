import { handlerFn } from './types';
import { gql } from 'graphql-request';
import { gqlSdk } from '../config';

interface YieldFromEvent {
  id: string;
  value?: string;
}

gql`
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

  await gqlSdk.setSubmitedFalseOnEmpty({
    id: after.id,
  });

  return 'ok';
};
