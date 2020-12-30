import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Error500 } from './pages/Error500';

import { useObservable } from './hooks/useObservable';
import { correctToken$ } from './services/TokenService';
import { RouteWithRule } from './components/RouteWithAuth';
import { ToastProvider } from 'react-toast-notifications';
import { Provider as UrqlProvider } from 'urql';
import { createAnonymousClient, createAuthClient } from './services/urqlClient';
import { BrowserRouter } from 'react-router-dom';
import { LoadingFullScreen } from './pages/LoadingFullScreen';
import { distinctUntilChanged } from 'rxjs/operators';
const LinkPage = lazy(() => import('./pages/Link'));
const Login = lazy(() => import('./pages/Login'));
const AppShell = lazy(() => import('./pages/App'));

function ClientProvider(props: React.PropsWithChildren<{}>) {
  const token = useObservable(
    correctToken$.pipe(distinctUntilChanged((prev, curr) => prev === curr)),
  );

  const [urqlClient, setUrqlClient] = useState(createAnonymousClient());
  const [isAnonymousClient, setIsAnonymousClient] = useState(true);

  console.log('TOKEN CLIENT PROVIDER : ', token);
  useEffect(() => {
    const hasNoToken = token === undefined || token === null;
    if (!hasNoToken && isAnonymousClient) {
      setUrqlClient(createAuthClient());
      setIsAnonymousClient(false);
    }
    if (hasNoToken && !isAnonymousClient) {
      setUrqlClient(createAnonymousClient());
      setIsAnonymousClient(true);
    }
  }, [isAnonymousClient, token]);

  return <UrqlProvider value={urqlClient}>{props.children}</UrqlProvider>;
}

function App() {
  /*
  const urqlClient = useMemo(() => {
    if (!!token === null) {
      return null;
    }
    return createUrqlClient(token);
  }, [token]);


<Suspense fallback={<LoadingFullScreen />}>
   */

  return (
    <ClientProvider>
      <ToastProvider autoDismiss={true}>
        <Suspense
          fallback={<LoadingFullScreen debugName="app global suspence" />}
        >
          <BrowserRouter>
            <Routes>
              <Navigate to="/app" />
              <Route path="links/:linkId" element={<LinkPage />} />
              <RouteWithRule path="app/*" element={<AppShell />} />
              <Route path="login" element={<Login />} />
              <Route path="500" element={<Error500 />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </ToastProvider>
    </ClientProvider>
  );
}

export default App;
