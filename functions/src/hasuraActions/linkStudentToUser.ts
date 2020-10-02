import {
  ActionFn,
  linkStudentToUserArgs,
  linkStudentToUserOutput,
} from './types';
import { https } from 'firebase-functions';
import { gql } from 'graphql-request';
import { gqlClient } from '../config';
import {
  DataForUpdateToStudentLinkQuery,
  DataForUpdateToStudentLinkQueryVariables,
  LinkStudentToUserMutation,
  LinkStudentToUserMutationVariables,
} from '../generated/graphql';
import * as yup from 'yup';

const LINK_ERRORS = {
  userAlreadyLinked: 'User is already linked to a student',
  linkNotFound: 'Link not found',
};

const GET_DATA_FOR_STUDENT_TO_USER = gql`
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
`;

const LINK_USER_TOKEN = gql`
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

export const linkStudentToUser: ActionFn<
  linkStudentToUserArgs,
  linkStudentToUserOutput
> = async (args, env) => {
  await argValidation.validate(args);
  const { maybeStudentWithUser, studentToSet } = await gqlClient.request<
    DataForUpdateToStudentLinkQuery,
    DataForUpdateToStudentLinkQueryVariables
  >(GET_DATA_FOR_STUDENT_TO_USER, {
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
  await gqlClient.request<
    LinkStudentToUserMutation,
    LinkStudentToUserMutationVariables
  >(LINK_USER_TOKEN, {
    id: studentToSet[0].id,
    user_id: env['x-hasura-user-id'],
  });
  return {
    ok: true,
  };
};
