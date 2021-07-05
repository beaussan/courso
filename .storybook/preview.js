import { Provider as UrqlProvider } from 'urql';
import '../src/tailwind.css';
import '../src/fonts/monoid/monoid.css';
import { initializeWorker, mswDecorator } from 'msw-storybook-addon';
import { createAnonymousClient } from '../src/services/urqlClient';
import { ToastProvider } from 'react-toast-notifications';
import { addDecorator } from '@storybook/react';
import * as nextImage from 'next/image';
import { withNextRouter } from 'storybook-addon-next-router';
import React from 'react';
import theme from '../tailwind.config';
const colors = require('tailwindcss/colors');

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

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
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      ...Object.entries(colors.gray).map(([key, value]) => ({
        name: `gray-${key}`,
        value,
      })),
      {
        name: 'black',
        value: '#000000',
      },
    ],
  },
};
export const decorators = [
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {}, // defaults to using addon actions integration, can override any method in the router
  }),
  (fn, c) => (
    <UrqlProvider value={createAnonymousClient()}>
      <ToastProvider>
        <>{fn(c)}</>
      </ToastProvider>
    </UrqlProvider>
  ),
];
