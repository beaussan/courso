import { ActionMap } from './types';
import { https } from 'firebase-functions';
import { gql } from 'graphql-request';
import { gqlSdk } from '../config';
import * as yup from 'yup';

const LINK_ERRORS = {
  userAlreadyLinked: 'User is already linked to a student',
  linkNotFound: 'Link not found',
};

gql`
  query dataForUpdateToStudentLink($tokenId: uuid!, $userId: uuid!) {
    studentToSet: student(where: { claim_token: { _eq: $tokenId } }) {
      claim_token
      user_id
      id
    }

    maybeStudentWithUser: student(where: { user_id: { _eq: $userId } }) {
      claim_token
      user_id
      id
    }
  }

  mutation linkStudentToUser($id: uuid!, $user_id: uuid!) {
    update_student_by_pk(
      pk_columns: { id: $id }
      _set: { user_id: $user_id, claim_token: null }
    ) {
      id
    }
  }
`;

const argValidation = yup
  .object()
  .shape({
    linkId: yup.string().uuid().required(),
  })
  .required();

export const linkStudentToUser: ActionMap['linkStudentToUser'] = async (
  args,
  env,
) => {
  await argValidation.validate(args);
  const {
    maybeStudentWithUser,
    studentToSet,
  } = await gqlSdk.dataForUpdateToStudentLink({
    userId: env['x-hasura-user-id'],
    tokenId: args.linkId,
  });

  if (maybeStudentWithUser && maybeStudentWithUser.length > 0) {
    throw new https.HttpsError(
      'invalid-argument',
      LINK_ERRORS.userAlreadyLinked,
    );
  }
  if (studentToSet?.length === 0) {
    throw new https.HttpsError('invalid-argument', LINK_ERRORS.linkNotFound);
  }

  await gqlSdk.linkStudentToUser({
    id: studentToSet[0].id,
    user_id: env['x-hasura-user-id'],
  });
  return {
    ok: true,
  };
};
