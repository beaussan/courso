import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import App from './App';
import * as Sentry from '@sentry/react';

if (import.meta.env.PROD) {
  Sentry.init({
    dsn: `${import.meta.env.VITE_SENTRY_KEY}`,
  });
}

ReactDOM.render(<App />, document.getElementById('root'));
