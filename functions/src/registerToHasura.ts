import * as functions from 'firebase-functions';
import { gqlClient, auth, db } from './config';
import { gql } from 'graphql-request';
import {
  CreateNewUserMutation,
  CreateNewUserMutationVariables,
} from './generated/graphql';

const CREATE_USER_MUTATION = gql`
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
    const data = await gqlClient.request<
      CreateNewUserMutation,
      CreateNewUserMutationVariables
    >(CREATE_USER_MUTATION, {
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
    console.log('Successfully save new user', data);
    return 'Success';
  } catch (e) {
    console.error('REFRESH ERROR', e);
    throw new functions.https.HttpsError('internal', 'error calling db');
  }
};
