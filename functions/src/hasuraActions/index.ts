import * as functions from 'firebase-functions';
import { func, hasuraActionToken } from '../config';
import * as express from 'express';
import { ActionMap, PayloadRequest } from './types';
import { sendStudentClaimMail } from './sendStudentClaimMail';
import { expressFireErrorHandler } from '../expressErrorHandler';
import { linkStudentToUser } from './linkStudentToUser';
import { submitHandoff } from './submitHandoff';
import { refreshGrades } from './refreshGrades';
import { fillEmptyYields } from './fillEmptyYields';
import { getGitFileData } from './getGitFileData';
import { getGitLogData } from './getGitLogData';

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  const token = req.header('token');
  if (!token || token !== hasuraActionToken) {
    functions.logger.info(`Invalid token for action : ${token}`);
    res.status(400).json({ message: 'Invalid token' });
    return;
  }
  next();
});

const actionMap: ActionMap = {
  sendStudentClaimMail,
  linkStudentToUser,
  submitHandoff,
  refreshGrades,
  fillEmptyYields,
  getGitFileData,
  getGitLogData,
};

app.post('/', async (req, res) => {
  const typedReq = req.body as PayloadRequest<any>;
  const handler = actionMap[typedReq.action.name];
  if (!handler) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'handler not found',
    );
  }
  functions.logger.info(`Starting action handler ${typedReq.action.name}`);
  functions.logger.debug(
    `Data for action handler ${typedReq.action.name}`,
    typedReq,
  );
  const params = typedReq.input;
  const sessionVars = typedReq.session_variables;
  const result = await handler(params, sessionVars);
  functions.logger.debug(
    `Data from action handler ${typedReq.action.name}`,
    result,
  );
  return res.json(result).status(200);
});

app.use(expressFireErrorHandler);
export const hasuraActions = func.https.onRequest(app);
