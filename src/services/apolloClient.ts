import { HttpLink, InMemoryCache, split, ApolloClient } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { setContext } from '@apollo/client/link/context';

if (!process.env.REACT_APP_HASURA_ENDPOINT) {
  throw new Error('Config not found');
}

const BASE_URL = process.env.REACT_APP_HASURA_ENDPOINT;

const WS_BASE_URL = `wss://${BASE_URL}`;
const HTTP_BASE_URL = `https://${BASE_URL}`;
const ENDPOINT = '/v1/graphql';

export const createApolloClient = (token: string | undefined) => {
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    if (!token) {
      return {
        headers,
      };
    }
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    };
  });
  const httpLink = new HttpLink({
    uri: `${HTTP_BASE_URL}${ENDPOINT}`,
  });

  const wsLink = new WebSocketLink({
    uri: `${WS_BASE_URL}${ENDPOINT}`,
    options: {
      reconnect: true,
      lazy: true,
      connectionParams: () => {
        return {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        };
      },
    },
  });
  const link = split(
    ({ query }) => {
      const data = getMainDefinition(query);
      return (
        data.kind === 'OperationDefinition' && data.operation === 'subscription'
      );
    },
    wsLink,
    authLink.concat(httpLink),
  );

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    },
  });
};
