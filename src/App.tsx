import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Error500 } from './pages/Error500';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from './services/apolloClient';
import { LoadingFullScreen } from './pages/LoadingFullScreen';
import { useObservable } from './hooks/useObservable';
import { correctToken$ } from './services/TokenService';
import { RouteWithRule } from './components/RouteWithAuth';
import { ToastProvider } from 'react-toast-notifications';

const LinkPage = lazy(() => import('./pages/Link'));
const Login = lazy(() => import('./pages/Login'));
const AppShell = lazy(() => import('./pages/App'));

function App() {
  const token = useObservable(correctToken$);
  const client = createApolloClient(token);
  return (
    <ApolloProvider client={client}>
      <ToastProvider autoDismiss={true}>
        <Suspense fallback={<LoadingFullScreen />}>
          <Routes>
            <Navigate to="/app" />
            <Route path="links/:linkId" element={<LinkPage />} />
            <RouteWithRule path="app/*" element={<AppShell />} />
            <Route path="login" element={<Login />} />
            <Route path="500" element={<Error500 />} />
          </Routes>
        </Suspense>
      </ToastProvider>
    </ApolloProvider>
  );
}

export default App;
