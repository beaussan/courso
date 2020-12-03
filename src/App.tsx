import React, { Suspense, lazy, useMemo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Error500 } from './pages/Error500';

import { useObservable } from './hooks/useObservable';
import { correctToken$ } from './services/TokenService';
import { RouteWithRule } from './components/RouteWithAuth';
import { ToastProvider } from 'react-toast-notifications';
import { Provider as UrqlProvider } from 'urql';
import { createUrqlClient } from './services/urqlClient';
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
  const client = useMemo(() => {
    console.log('Memo create client with new token ', token);
    return createUrqlClient(token);
  }, [token]);
  /*
  //useWhyDidYouUpdate('ClientProvider', props);
  const shouldRebuildClient = useMemoCompare(
    token,
    (prev, next) => prev !== next,
  );
  const [client, setClient] = React.useState(createUrqlClient(token));

  useEffect(() => {
    if (shouldRebuildClient) {
      console.log('REBUILDING CLIENT');
      setClient(createUrqlClient(token));
    }
  }, [token, shouldRebuildClient]);

   */
  /*
  if (!token) {
    return <>{props.children}</>;
  }

 */

  return <UrqlProvider value={client}>{props.children}</UrqlProvider>;
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
