import * as functions from 'firebase-functions';
import { auth, db } from './config';
import { generateHasuraUserFromFirebaseUser } from './registerToHasura';

export const getUID = (context: any) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'permission-denied',
      'function called without context.auth',
    );
  } else {
    return context.auth.uid;
  }
};

export const updateClaims = async (uid: string) => {
  functions.logger.debug(`updateClaims for ${uid}`);
  let data = (await db.collection('hasura').doc(uid).get()).data();
  if (!data) {
    functions.logger.debug('No doc for user found, creating user in hasura...');
    try {
      await generateHasuraUserFromFirebaseUser(uid);
    } catch (e) {
      functions.logger.error('Could not create user un hasura !', e);
    }
    data = (await db.collection('hasura').doc(uid).get()).data();
  }
  if (!data) {
    throw new Error('user not found');
  }

  const { hasuraId, claims } = data;
  functions.logger.debug(`Found data for user ${uid}`, { hasuraId, claims });

  const defaultClaims = {
    'x-hasura-default-role': 'student',
    'x-hasura-allowed-roles': ['student'],
    'x-hasura-user-id': hasuraId,
    'x-hasura-firebase-id': uid,
  };

  const finalClaims = {
    'https://hasura.io/jwt/claims': {
      ...defaultClaims,
      ...(claims ?? {}),
    },
  };
  functions.logger.debug(`Setting claims to user ${uid}`, finalClaims);
  return auth.setCustomUserClaims(uid, finalClaims);
};
