import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  subscriptionExchange,
} from 'urql';
import { devtoolsExchange } from '@urql/devtools';
import { makeOperation } from '@urql/core';
import { take } from 'rxjs/operators';

import { SubscriptionClient } from 'subscriptions-transport-ws';
import { authExchange } from '@urql/exchange-auth';
import { correctToken$ } from './TokenService';

if (!process.env.REACT_APP_HASURA_ENDPOINT) {
  throw new Error('Config not found');
}

const BASE_URL = process.env.REACT_APP_HASURA_ENDPOINT;

const WS_BASE_URL = `wss://${BASE_URL}`;
const HTTP_BASE_URL = `https://${BASE_URL}`;
const ENDPOINT = '/v1/graphql';
const WS_URL = `${WS_BASE_URL}${ENDPOINT}`;
const HTTP_URL = `${HTTP_BASE_URL}${ENDPOINT}`;

export const createUrqlClient = (token: string | undefined) => {
  const tokenHeader = token ? `Bearer ${token}` : undefined;
  const subscriptionClient = new SubscriptionClient(WS_URL, {
    reconnect: true,
    connectionParams: {
      headers: {
        Authorization: tokenHeader,
      },
    },
  });

  const authExchangeBuild = authExchange<{ token: string }>({
    getAuth: async (params) => {
      // const maybeToken = await correctToken$.pipe(take(1)).toPromise();
      if (!token) {
        return null;
      }
      return { token };
    },
    addAuthToOperation: ({ authState, operation }) => {
      if (!token) {
        return operation;
      }
      const fetchOptions =
        typeof operation.context.fetchOptions === 'function'
          ? operation.context.fetchOptions()
          : operation.context.fetchOptions || {};
      return makeOperation(operation.kind, operation, {
        ...operation.context,
        fetchOptions: {
          ...fetchOptions,
          headers: {
            ...fetchOptions.headers,
            Authorization: `Bearer ${authState?.token}`,
          },
        },
      });
    },
    didAuthError: (params) => {
      console.error('didAuthError', params);
      if (
        params.error.message ===
        '[GraphQL] Missing Authorization header in JWT authentication mode'
      ) {
        return true;
      }
      return false;
    },
  });
  return createClient({
    url: HTTP_URL,
    suspense: true,

    /*
    fetchOptions: () => {
      if (!token) {
        fancyPrint('No token in fetchOptions');
        return {};
      }
      console.log('FETCH OPTIONS : ', `Bearer ${token}`);
      fancyPrint(`Token in fetchOptions ${token.substring(0, 5)}`);
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    },

     */
    exchanges: [
      devtoolsExchange,
      /*
      errorExchange({
        onError: console.error,
      }),

       */
      // dedupExchange,
      cacheExchange,
      /*
      retryExchange({
        initialDelayMs: 1000,
        maxDelayMs: 15000,
        randomDelay: true,
        maxNumberAttempts: 2,
        retryIf: (error) => {
          console.log(error);
          return true;
        },
      }),
       */
      authExchangeBuild,
      /*
       */
      fetchExchange,
      subscriptionExchange({
        forwardSubscription(operation) {
          return subscriptionClient.request(operation);
        },
      }),
    ],
  });
};
