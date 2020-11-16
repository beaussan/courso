import { handlerFn, HandlerMap } from './types';
import { gql } from 'graphql-request';
import * as functions from 'firebase-functions';
import { giteaClient, gqlClient } from '../config';
import {
  OnStudentYieldCreatedDataQuery,
  OnStudentYieldCreatedDataQueryVariables,
  OnStudentYieldMutationMutation,
  OnStudentYieldMutationMutationVariables,
} from '../generated/graphql';
import * as slug from 'slug';

interface StudentPracticeYieldInput {
  id: string;
  value: string;
  gitea_org_and_repo?: string;
}

const ON_STUDENT_YIELD_CREATED_QUERY = gql`
  query onStudentYieldCreatedData($id: uuid!) {
    practice_to_student_yield_by_pk(id: $id) {
      practice_to_student {
        student {
          full_name
        }
        practice_to_course {
          gitea_org_name
        }
      }
      practice_yield {
        id
        name
        method
      }
    }
  }
`;

const ON_STUDENT_YIELD_MUTATION = gql`
  mutation onStudentYieldMutation($id: uuid!, $gitea_org_and_repo: String!) {
    update_practice_to_student_yield_by_pk(
      pk_columns: { id: $id }
      _set: { gitea_org_and_repo: $gitea_org_and_repo }
    ) {
      gitea_org_and_repo
    }
  }
`;

const onStudentYieldCreated: handlerFn<StudentPracticeYieldInput> = async (
  input,
) => {
  const after = input.event.data.new;
  if (!after) {
    throw new functions.https.HttpsError('internal', 'No after found');
  }

  const { practice_to_student_yield_by_pk } = await gqlClient.request<
    OnStudentYieldCreatedDataQuery,
    OnStudentYieldCreatedDataQueryVariables
  >(ON_STUDENT_YIELD_CREATED_QUERY, {
    id: after.id,
  });

  if (practice_to_student_yield_by_pk?.practice_yield?.method !== 'GIT_REPO') {
    return 'ok';
  }

  if (
    !practice_to_student_yield_by_pk.practice_to_student.practice_to_course
      .gitea_org_name
  ) {
    throw new functions.https.HttpsError('internal', 'gita org not found');
  }

  const slugedName = slug(
    `${practice_to_student_yield_by_pk.practice_to_student.student.full_name} ${practice_to_student_yield_by_pk.practice_yield.name}`,
    { lower: false },
  );
  const repoOwner =
    practice_to_student_yield_by_pk.practice_to_student.practice_to_course
      .gitea_org_name;

  const { ok, originalError, data } = await giteaClient.post('/repos/migrate', {
    repo_owner: repoOwner,
    repo_name: slugedName,
    mirror: false,
    clone_addr: after.value,
    description: `Yield generated for ${after.id}`,
  });
  if (!ok) {
    functions.logger.error('Error migrating repo', originalError);
    functions.logger.error('Error migrating repo', data);
    throw originalError;
  }
  await gqlClient.request<
    OnStudentYieldMutationMutation,
    OnStudentYieldMutationMutationVariables
  >(ON_STUDENT_YIELD_MUTATION, {
    id: after.id,
    gitea_org_and_repo: `${repoOwner}/${slugedName}`,
  });
  return 'ok';
};

const onStudentYieldDeleted: handlerFn<StudentPracticeYieldInput> = async (
  data,
) => {
  const before = data.event.data.old;
  if (!before) {
    throw new functions.https.HttpsError('internal', 'No after found');
  }
  if (!before.gitea_org_and_repo) {
    return 'No git found';
  }

  const { ok, originalError } = await giteaClient.delete(
    `/repos/${before.gitea_org_and_repo}`,
  );

  if (!ok) {
    throw originalError;
  }
  return 'ok';
};

export const yieldToGiteaHandler: HandlerMap = {
  onStudentYieldCreated,
  onStudentYieldDeleted,
};
