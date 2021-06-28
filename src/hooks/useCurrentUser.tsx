import gql from 'graphql-tag';
import { useCurrentUserQuery } from '@/generated/graphql';
import { useAuthContext } from '@/hooks/useAuthContext';
import React, { createContext } from 'react';

gql`
  query currentUser($firebaseId: String!) {
    user(where: { firebaseId: { _eq: $firebaseId } }) {
      createdAt
      displayName
      email
      firebaseId
      photoUrl
      updatedAt
      id
    }
  }
`;

const useCurrentUserValue = () => {
  const { firebaseUser } = useAuthContext();
  // console.log('Firebase user :', firebaseUser);

  const [{ data, error, fetching }] = useCurrentUserQuery({
    variables: {
      firebaseId: firebaseUser?.uid ?? '',
    },
    requestPolicy: 'network-only',
  });

  if (error) {
    if (
      error.message !==
      '[GraphQL] field "user" not found in type: \'query_root\''
    ) {
      console.error('ERROR IN useCurrentUser');
      console.error(error.message);
    }
  }

  const user = data?.user?.[0];
  return { error, user, fetching, loading: fetching };
};

export type UseCurrentUserContextContextType = ReturnType<
  typeof useCurrentUserValue
>;

const UseCurrentUserContext = createContext<
  UseCurrentUserContextContextType | undefined
>(undefined);

export const CurrentUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const value = useCurrentUserValue();

  return (
    <UseCurrentUserContext.Provider value={value}>
      {children}
    </UseCurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => {
  const context = React.useContext(UseCurrentUserContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CurrentUserProvider');
  }
  return context;
};
