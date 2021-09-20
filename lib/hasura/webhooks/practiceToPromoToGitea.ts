import { handlerFn, HandlerMap } from './types';
import slug from 'slug';
import { gqlSdk } from '@lib/gql';
import { HttpsError } from '@lib/common/HttpsError';
import { giteaClient } from '@lib/gitea/giteaApi';

const generateSlugOrgName = async (id: string): Promise<string> => {
  const data = await gqlSdk.getPracticeToPromotionMeta({
    id,
  });
  if (
    !data ||
    !data.practice_to_course_by_pk ||
    !data.practice_to_course_by_pk.practice ||
    !data.practice_to_course_by_pk.course
  ) {
    throw new HttpsError('invalid-argument', 'could not get course data');
  }
  const {
    practice_to_course_by_pk: {
      practice: { title },
      course: { name, years },
    },
  } = data;
  return slug(`${years} ${name} ${title}`, { lower: false });
};

interface PracticeToPromo {
  id: string;
  promotion_id: string;
  practice_id: string;
  gitea_org_name?: string;
}

const onPracticeToPromoCreated: handlerFn<PracticeToPromo> = async (data) => {
  const after = data.event.data.new;
  if (!after) {
    throw new HttpsError('internal', 'No after found');
  }
  const orgName = await generateSlugOrgName(after.id);
  const { ok, originalError } = await giteaClient.post('/orgs', {
    username: orgName,
    description: `Practice generated for promotion ${after.promotion_id}`,
  });
  if (!ok) {
    throw originalError;
  }

  await gqlSdk.updateGiteaOrgName({
    id: after.id,
    gitea_org_name: orgName,
  });

  return 'ok';
};
const onPracticeToPromoDeleted: handlerFn<PracticeToPromo> = async (data) => {
  const before = data.event.data.old;
  if (!before) {
    throw new HttpsError('internal', 'No after found');
  }
  if (!before.gitea_org_name) {
    return 'No org found';
  }
  const { ok, originalError } = await giteaClient.delete(
    `/orgs/${before.gitea_org_name}`,
  );
  if (!ok) {
    throw originalError;
  }
  return 'ok';
};

export const handlersPracticeToPromoToGitea: HandlerMap = {
  on_practice_to_promo_created: onPracticeToPromoCreated,
  on_practice_to_promo_deleted: onPracticeToPromoDeleted,
};
