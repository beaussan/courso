import '../src/tailwind.css';
import { addDecorator } from '@storybook/react';
import React from 'react';
import { Provider as UrqlProvider } from 'urql';

import { initializeWorker, mswDecorator } from 'msw-storybook-addon';
import { createAnonymousClient } from '../src/services/urqlClient';

if (typeof window !== 'undefined' && typeof window.global === 'undefined') {
  window.global = window;
}
initializeWorker();
addDecorator(mswDecorator);
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (fn, c) => (
    <UrqlProvider value={createAnonymousClient()}>
      <>{fn(c)}</>
    </UrqlProvider>
  ),
];
