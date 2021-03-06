import { gql } from 'graphql-request';
import { handlerFn, HandlerMap } from './types';
import * as functions from 'firebase-functions';
import { giteaClient, gqlSdk } from '../config';
import * as slug from 'slug';

gql`
  query getPracticeToPromotionMeta($id: uuid!) {
    practice_to_course_by_pk(id: $id) {
      practice {
        title
      }
      course {
        name
        years
      }
    }
  }
`;

gql`
  mutation updateGiteaOrgName($id: uuid!, $gitea_org_name: String!) {
    update_practice_to_course_by_pk(
      pk_columns: { id: $id }
      _set: { gitea_org_name: $gitea_org_name }
    ) {
      id
    }
  }
`;

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
    throw new functions.https.HttpsError(
      'invalid-argument',
      'could not get course data',
    );
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
    throw new functions.https.HttpsError('internal', 'No after found');
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
    throw new functions.https.HttpsError('internal', 'No after found');
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
