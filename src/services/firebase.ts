import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

if (!import.meta.env.VITE_FIREBASE_CONFIG) {
  throw new Error('Config not found');
}

const firebaseConfig = JSON.parse(`${import.meta.env.VITE_FIREBASE_CONFIG}`);

export const app = firebase.initializeApp(firebaseConfig);
export const fn = app.functions('europe-west1');
export const auth = app.auth();
export const db = app.firestore();

export const refreshTokenFn = fn.httpsCallable('refreshToken');
