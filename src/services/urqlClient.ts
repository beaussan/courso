import {
  cacheExchange,
  createClient,
  dedupExchange,
  errorExchange,
  fetchExchange,
  //  subscriptionExchange,
} from 'urql';
import { devtoolsExchange } from '@urql/devtools';
import { makeOperation } from '@urql/core';
import { take } from 'rxjs/operators';
import * as Sentry from '@sentry/react';

// import { SubscriptionClient } from 'subscriptions-transport-ws';
import { authExchange } from '@urql/exchange-auth';
import { correctToken$ } from './TokenService';

if (!process.env.REACT_APP_HASURA_ENDPOINT) {
  throw new Error('Config not found');
}

const BASE_URL = process.env.REACT_APP_HASURA_ENDPOINT;

// const WS_BASE_URL = `wss://${BASE_URL}`;
const HTTP_BASE_URL = `https://${BASE_URL}`;
const ENDPOINT = '/v1/graphql';
// const WS_URL = `${WS_BASE_URL}${ENDPOINT}`;
const HTTP_URL = `${HTTP_BASE_URL}${ENDPOINT}`;

export const createAnonymousClient = () => {
  return createClient({
    url: HTTP_URL,
    suspense: true,
    exchanges: [devtoolsExchange, dedupExchange, cacheExchange, fetchExchange],
  });
};

export const createAuthClient = () => {
  return createClient({
    url: HTTP_URL,
    suspense: true,
    exchanges: [
      devtoolsExchange,
      errorExchange({
        onError: (error) => {
          Sentry.captureException(error);
          console.error(error, 'URQL ERROR');
        },
      }),
      dedupExchange,
      cacheExchange,
      authExchange<{ token: string }>({
        getAuth: async (params) => {
          const maybeToken = await correctToken$.pipe(take(1)).toPromise();
          if (!maybeToken) {
            return null;
          }
          return { token: maybeToken };
        },
        addAuthToOperation: ({ authState, operation }) => {
          if (!authState?.token) {
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
                Authorization: `Bearer ${authState.token}`,
              },
            },
          });
        },
        didAuthError: (params) => {
          console.error('didAuthError', params);
          return params.error.message.includes('JWT');
        },
      }),
      fetchExchange,
    ],
  });
};

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
