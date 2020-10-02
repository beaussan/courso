import * as functions from 'firebase-functions';
import { ErrorRequestHandler } from 'express';
// tslint:disable-next-line:no-import-side-effect
import 'express-async-errors';
import { ValidationError } from 'yup';

export const expressFireErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  functions.logger.info('Error handler triggered', err);
  if (err instanceof functions.https.HttpsError) {
    functions.logger.debug('Error HttpsError found', err);
    const { status } = err.httpErrorCode;
    res.status(status).json({
      message: err.message,
      code: JSON.stringify(err.toJSON()),
    });
  } else if (err instanceof ValidationError) {
    functions.logger.debug('Error ValidationError found', err);
    res.status(400).json({
      message: err.message,
      code: JSON.stringify(err.errors),
    });
  } else {
    functions.logger.debug(
      'Error HttpsError not found found, returning 400 with hasura codes',
    );
    res.status(400).json({
      message: err.message,
      code: '500',
    });
  }
};
