import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { GraphQLClient } from 'graphql-request';
import { create } from 'apisauce';

export const app = admin.initializeApp();

// import * as functions from 'firebase-functions';
export const db = app.firestore();
export const bucket = app.storage().bucket();
export const auth = app.auth();

// REGION CONFIG
export const func = functions.region('europe-west1');

// ENV
export const webBaseUrl = functions.config().web.base_url;
export const hasuraGraphqlUrl = functions.config().hasura.graphql_url;
const hasuraAdminSecret = functions.config().hasura.admin_secret;
export const hasuraWebhookToken = functions.config().hasura.webhook_token;
export const hasuraActionToken = functions.config().hasura.action_token;

export const gqlClient = new GraphQLClient(hasuraGraphqlUrl, {
  headers: { 'x-hasura-admin-secret': hasuraAdminSecret },
});

const giteaToken = functions.config().gitea.token;
const giteaUrl = functions.config().gitea.url;

export const giteaClient = create({
  baseURL: `${giteaUrl}/api/v1`,
  headers: {
    Authorization: `token ${giteaToken}`,
  },
});
