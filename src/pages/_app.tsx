import { AppProps } from 'next/app';
import React, { ReactNode, useEffect, useState } from 'react';
import { createAnonymousClient, createAuthClient } from '@/services/urqlClient';
import { Provider as UrqlProvider } from 'urql';
import { CurrentUserProvider } from '@/hooks/useCurrentUser';
import '@/tailwind.css';
import Head from 'next/head';
import '@/fonts/monoid/monoid.css';

// import splitbee from '@splitbee/web';
import { ToastProvider } from 'react-toast-notifications';
import { AuthContextProvider, useAuthContext } from '@/hooks/useAuthContext';

type getLayoutFn = (input: ReactNode) => ReactNode;

function ClientProvider(props: React.PropsWithChildren<{}>) {
  const { token } = useAuthContext();

  const [urqlClient, setUrqlClient] = useState(createAnonymousClient());
  const [isAnonymousClient, setIsAnonymousClient] = useState(true);

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

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout =
    ((Component as any).getLayout as getLayoutFn) || ((page) => <>{page}</>);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AuthContextProvider>
        <ClientProvider>
          <CurrentUserProvider>
            <>
              <ToastProvider autoDismiss>
                {getLayout(<Component {...pageProps} />)}
              </ToastProvider>
            </>
          </CurrentUserProvider>
        </ClientProvider>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
