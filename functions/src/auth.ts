import * as functions from 'firebase-functions';
import { getUID, updateClaims } from './utils';
import { db, func, gqlSdk } from './config';
import { gql } from 'graphql-request';

export const onClaimChange = func.firestore
  .document('/hasura/{userId}')
  .onWrite((change, context) => {
    return updateClaims(context.params.userId);
  });

export const refreshToken = func.https.onCall(async (data, context) => {
  functions.logger.log('START REFRESH ??');
  const uid = getUID(context);
  try {
    await updateClaims(uid);
  } catch (e) {
    functions.logger.error('REFRESH ERROR', e);
    throw new functions.https.HttpsError(
      'internal',
      'error refreshing auth token',
    );
  }
});

gql`
  mutation updateFirebaseId($firebaseId: String!) {
    updateUser(
      where: { firebaseId: { _eq: $firebaseId } }
      _set: { firebaseId: null }
    ) {
      affected_rows
    }
  }
`;

export const onUserDelete = func.auth.user().onDelete(async (user) => {
  await db.doc(`/hasura/${user.uid}`).delete();
  await gqlSdk.updateFirebaseId({
    firebaseId: user.uid,
  });
});
