import { DecoratorFn } from '@storybook/react';
import { graphql } from 'msw';
import React from 'react';
import {
  CurrentUserQuery,
  CurrentUserQueryVariables,
} from '@/generated/graphql';
import { AuthContext, MockAuthContextProvider } from '@/hooks/useAuthContext';
import firebase from 'firebase';
import { CurrentUserProvider } from '@/hooks/useCurrentUser';

export const fullScreenBody: DecoratorFn = (fn) => (
  <div className="bg-gray-100">
    <div className=" max-w-7xl mx-auto p-4 sm:px-6 md:px-8">{fn()}</div>
  </div>
);

type AuthDecoratorProps = {
  gql: Handler;
  delay?: number;
};
const stubUser: firebase.User = {
  multiFactor: {} as any,
  linkWithPhoneNumber(
    phoneNumber: string,
    applicationVerifier: firebase.auth.ApplicationVerifier,
  ): Promise<firebase.auth.ConfirmationResult> {
    throw new Error('Not implemented in stub');
  },
  linkWithPopup(
    provider: firebase.auth.AuthProvider,
  ): Promise<firebase.auth.UserCredential> {
    throw new Error('Not implemented in stub');
  },
  linkWithRedirect(provider: firebase.auth.AuthProvider): Promise<void> {
    throw new Error('Not implemented in stub');
  },
  reauthenticateWithCredential(
    credential: firebase.auth.AuthCredential,
  ): Promise<firebase.auth.UserCredential> {
    throw new Error('Not implemented in stub');
  },
  reauthenticateWithPhoneNumber(
    phoneNumber: string,
    applicationVerifier: firebase.auth.ApplicationVerifier,
  ): Promise<firebase.auth.ConfirmationResult> {
    throw new Error('Not implemented in stub');
  },
  reauthenticateWithPopup(
    provider: firebase.auth.AuthProvider,
  ): Promise<firebase.auth.UserCredential> {
    throw new Error('Not implemented in stub');
  },
  reauthenticateWithRedirect(
    provider: firebase.auth.AuthProvider,
  ): Promise<void> {
    throw new Error('Not implemented in stub');
  },
  sendEmailVerification(
    actionCodeSettings?: firebase.auth.ActionCodeSettings | null,
  ): Promise<void> {
    return Promise.resolve(undefined);
  },
  unlink(providerId: string): Promise<firebase.User> {
    throw new Error('Not implemented in stub');
  },
  updateEmail(newEmail: string): Promise<void> {
    throw new Error('Not implemented in stub');
  },
  updatePassword(newPassword: string): Promise<void> {
    throw new Error('Not implemented in stub');
  },
  updatePhoneNumber(
    phoneCredential: firebase.auth.AuthCredential,
  ): Promise<void> {
    throw new Error('Not implemented in stub');
  },
  updateProfile(profile: {
    displayName?: string | null;
    photoURL?: string | null;
  }): Promise<void> {
    throw new Error('Not implemented in stub');
  },
  verifyBeforeUpdateEmail(
    newEmail: string,
    actionCodeSettings?: firebase.auth.ActionCodeSettings | null,
  ): Promise<void> {
    throw new Error('Not implemented in stub');
  },
  displayName: 'Display name',
  email: 'mock@mocky.fr',
  uid: 'd046f1fd-d983-4bf6-8149-d7b809d35d81',
  async delete() {
    throw new Error('Not implemented in stub');
  },
  emailVerified: true,
  async getIdToken() {
    throw new Error('Not implemented in stub');
  },
  isAnonymous: false,
  metadata: {},
  phoneNumber: null,
  photoURL: null,
  providerData: [],
  providerId: 'tto',
  refreshToken: '',
  tenantId: '',
  linkAndRetrieveDataWithCredential(
    credential: firebase.auth.AuthCredential,
  ): Promise<firebase.auth.UserCredential> {
    throw new Error('Not implemented in stub');
  },
  reauthenticateAndRetrieveDataWithCredential(
    credential: firebase.auth.AuthCredential,
  ): Promise<firebase.auth.UserCredential> {
    throw new Error('Not implemented in stub');
  },
  linkWithCredential(
    credential: firebase.auth.AuthCredential,
  ): Promise<firebase.auth.UserCredential> {
    throw new Error('Not implemented in stub');
  },
  async reload() {
    throw new Error('Not implemented in stub');
  },
  async getIdTokenResult() {
    throw new Error('Not implemented in stub');
  },
  toJSON() {
    throw new Error('Not implemented in stub');
  },
};

const signInStudent: AuthContext = {
  authStatus: 'in',
  firebaseUser: stubUser,
  token: 'aaaaa',
  userRole: 'student',
};

const signInTeacher: AuthContext = {
  authStatus: 'in',
  firebaseUser: stubUser,
  token: 'aaaaa',
  userRole: 'teacher',
};

const signOut: AuthContext = {
  authStatus: 'out',
  firebaseUser: undefined,
  token: undefined,
  userRole: undefined,
};

type Handler = ReturnType<typeof graphql.link>;
type HalderReturn = ReturnType<typeof graphql.query>;
type AuthDecoratorFn = (options: AuthDecoratorProps) => HalderReturn;

/*
const buildAuthDecorator = (
  body: CurrentUserQuery,
  authState: AuthContext,
): AuthDecoratorFn => {
  return ({ gql, delay = 0 }) => {
    const handler = gql.query<CurrentUserQuery, CurrentUserQueryVariables>(
      'currentUser',
      (req, res, context) => {
        return res(
          context.delay(delay),
          context.data(body),
          context.status(200),
        );
      },
    );
    return (fn, c) => {
      c.parameters.msw = [...(c?.parameters?.msw ?? []), handler];
      console.log(c);

      return (
        <MockAuthContextProvider params={authState}>
          <CurrentUserProvider>{fn()}</CurrentUserProvider>
        </MockAuthContextProvider>
      );
    };
  };
};*/

const buildCurrentUserMock = (body: CurrentUserQuery): AuthDecoratorFn => {
  return ({ gql, delay = 0 }) => {
    return gql.query<CurrentUserQuery, CurrentUserQueryVariables>(
      'currentUser',
      (req, res, context) => {
        return res(
          context.delay(delay),
          context.data(body),
          context.status(200),
        );
      },
    );
  };
};

const buildAuthStateDecorator = (context: AuthContext): DecoratorFn => {
  return (fn) => (
    <MockAuthContextProvider params={context}>
      <CurrentUserProvider>{fn()}</CurrentUserProvider>
    </MockAuthContextProvider>
  );
};

export const signInStudentState = buildAuthStateDecorator(signInStudent);
export const signInTeacherState = buildAuthStateDecorator(signInTeacher);
export const signOutState = buildAuthStateDecorator(signOut);

const mockUser: CurrentUserQuery = {
  user: [
    {
      id: '072628c4-df11-4594-a1c0-549c6be15754',
      createdAt: '',
      updatedAt: '',
      photoUrl: '',
      displayName: 'A mock user',
      email: 'mock@provider.mock',
      firebaseId: 'aeb2ebb4-d46d-4093-9fa5-639ffa3f8a47',
    },
  ],
};

export const signInUserGql = buildCurrentUserMock(mockUser);
export const signOutUserGql = buildCurrentUserMock({
  user: [],
});
