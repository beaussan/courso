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
  console.log('useCurrentUser', firebaseUser);
  console.log('useCurrentUser', firebaseUser?.uid ?? '');
  const [
    { data, error, fetching, extensions, operation },
    retry,
  ] = useCurrentUserQuery({
    variables: {
      firebaseId: firebaseUser?.uid ?? '',
    },
    requestPolicy: 'network-only',
    // pause: !firebaseUser?.uid,
    /*
    pause: !firebaseUser?.uid,
    pollInterval: 1000,
     */
  });
  /* * /

  if (!fetching) {
    const idRequested = (operation?.variables as CurrentUserQueryVariables)
      ?.firebaseId;
    const currentUserId = firebaseUser?.uid;
    if (idRequested !== currentUserId) {
      console.log('Refresh ?');
      retry({
        requestPolicy: 'network-only',
      });
    }
  }

  /**/
  if (error) {
    if (
      error.message !==
      '[GraphQL] Missing Authorization header in JWT authentication mode'
    ) {
      console.error('ERROR IN useCurrentUser');
      console.error(error.message);
    } else {
      console.error('Error missing JWT', error);
      // setTimeout(() => retry(), 1000);
    }
  }

  console.log('useCurrentUser', {
    data,
    error,
    fetching,
    extensions,
    operation,
  });

  const user = data?.user?.[0];
  return { error, user, fetching, loading: fetching };
};
