import * as functions from 'firebase-functions';
import { auth, db, gqlSdk } from './config';
import { gql } from 'graphql-request';

gql`
  mutation createNewUser(
    $email: String
    $id: String
    $photoURL: String
    $displayName: String
  ) {
    insertUserOne(
      object: {
        email: $email
        firebaseId: $id
        photoUrl: $photoURL
        displayName: $displayName
      }
      on_conflict: {
        constraint: user_firebase_id_key
        update_columns: updatedAt
      }
    ) {
      id
    }
  }
`;

export const generateHasuraUserFromFirebaseUser = async (uid: string) => {
  const { photoURL, displayName, email } = await auth.getUser(uid);
  try {
    const data = await gqlSdk.createNewUser({
      displayName,
      email,
      photoURL,
      id: uid,
    });
    functions.logger.log(data);
    await db.collection('hasura').doc(uid).set(
      {
        hasuraId: data?.insertUserOne?.id,
      },
      { merge: true },
    );
    functions.logger.info('Successfully save new user', data);
    return 'Success';
  } catch (e) {
    functions.logger.error('REFRESH ERROR', e);
    throw new functions.https.HttpsError('internal', 'error calling db');
  }
};
