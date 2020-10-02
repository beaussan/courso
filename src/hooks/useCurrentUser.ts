import { gql } from '@apollo/client';
import { useCurrentUserQuery } from '../generated/graphql';
import { useObservable } from './useObservable';
import { userWithCorrectToken$ } from '../services/TokenService';

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

export const useCurrentUser = () => {
  const firebaseUser = useObservable(userWithCorrectToken$);
  const { data, error, variables, loading } = useCurrentUserQuery({
    variables: {
      firebaseId: firebaseUser?.uid ?? 'anonymous',
    },
  });
  if (error) {
    if (
      error.message !==
      'Missing Authorization header in JWT authentication mode'
    ) {
      console.error(error.message);
    }
  }
  const user = data?.user?.[0];
  return { error, user, loading, variables };
};
