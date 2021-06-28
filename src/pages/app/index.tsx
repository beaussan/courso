import React, { useEffect } from 'react';
import { getNavLayout } from '@/layouts/NavBar';
import { LoadingFullScreen } from '@/layouts/LoadingFullScreen';
import { useRouter } from 'next/router';
import { routes } from '@/routGetters';

export const App = () => {
  const router = useRouter();
  useEffect(() => {
    router.push(routes.dash());
  }, [router]);
  return <LoadingFullScreen debugName="App waiting for redirect" />;
};

App.getLayout = getNavLayout;

export default App;
