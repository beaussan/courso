import * as functions from 'firebase-functions';
import { func, hasuraWebhookToken } from '../config';
import * as express from 'express';
import { HandlerMap, webHookModel, WebhookPayload } from './types';
import { expressFireErrorHandler } from '../expressErrorHandler';
import { handlersPracticeToPromoToGitea } from './practiceToPromoToGitea';
import { yieldToGiteaHandler } from './yieldToGitea';
import { onStudentYieldCreatedWithNoValue } from './onStudentYieldCreatedWithNoValue';

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  const token = req.header('token');
  if (!token || token !== hasuraWebhookToken) {
    functions.logger.info(`Invalid token for webhook : ${token}`);
    throw new functions.https.HttpsError('invalid-argument', 'token not found');
  }
  next();
});

app.use((req, res, next) => {
  try {
    webHookModel.validateSync(req.body, { abortEarly: false });
  } catch (e) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'body not valid',
      e.errors,
    );
  }
  next();
});

const handlers: HandlerMap = {
  ...handlersPracticeToPromoToGitea,
  ...yieldToGiteaHandler,
  onStudentYieldCreatedWithNoValue,
};

app.post('/', async (req, res) => {
  const data = req.body as WebhookPayload<any>;

  const handler = handlers[data.trigger.name];
  if (!handler) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'handler not found',
    );
  }

  functions.logger.info(`Starting webhook handler ${data.trigger.name}`);
  functions.logger.debug(`Data for webhook ${data.trigger.name}`, data);
  await handler(data);

  res.status(200).json(data);
});

app.use(expressFireErrorHandler);
export const hasuraWebsocket = func.https.onRequest(app);
