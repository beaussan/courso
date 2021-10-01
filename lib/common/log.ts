import pino from 'pino';

const mainLogger = pino({});

export const createLogger = ({ component }: { component: string }) => {
  return mainLogger.child({ component });
};
