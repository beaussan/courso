import { handlerFn, HandlerMap } from './types';
import slug from 'slug';
import { gqlSdk } from '@lib/gql';
import { createLogger } from '@lib/common/log';
import { HttpsError } from '@lib/common/HttpsError';
import { giteaClient } from '@lib/gitea/giteaApi';

interface StudentPracticeYieldInput {
  id: string;
  value: string;
  gitea_org_and_repo?: string;
}

const logger = createLogger({ component: 'yieldToGitea' });

const onStudentYieldCreated: handlerFn<StudentPracticeYieldInput> = async (
  input,
) => {
  const after = input.event.data.new;
  if (!after) {
    throw new HttpsError('internal', 'No after found');
  }

  const {
    practice_to_student_yield_by_pk,
  } = await gqlSdk.onStudentYieldCreatedData({
    id: after.id,
  });

  if (!practice_to_student_yield_by_pk) {
    return 'ok';
  }

  if (practice_to_student_yield_by_pk?.practice_yield?.method !== 'GIT_REPO') {
    return 'ok';
  }

  if (`${after.value}`.length === 0) {
    return 'value not set';
  }

  if (
    !practice_to_student_yield_by_pk.practice_to_student.practice_to_course
      .gitea_org_name
  ) {
    throw new HttpsError('internal', 'gita org not found');
  }

  const slugedName = slug(
    `${practice_to_student_yield_by_pk.practice_to_student.student.full_name} ${practice_to_student_yield_by_pk.practice_yield.name}`,
    { lower: false },
  );
  const repoOwner =
    practice_to_student_yield_by_pk.practice_to_student.practice_to_course
      .gitea_org_name;

  const { ok, originalError, data: giteaData } = await giteaClient.post(
    '/repos/migrate',
    {
      repo_owner: repoOwner,
      repo_name: slugedName,
      mirror: false,
      clone_addr: after.value,
      description: `Yield generated for ${after.id}`,
    },
  );
  if (!ok) {
    logger.error('Error migrating repo', originalError);
    logger.error('Error migrating repo', giteaData);
    throw originalError;
  }

  await gqlSdk.onStudentYieldMutation({
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
    throw new HttpsError('internal', 'No after found');
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
