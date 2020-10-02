import React from 'react';
import { Button } from '../../components/Button';
import { auth } from '../../services/firebase';
import { PageHead } from '../../components/PageHead';
import { useCurrentUser } from '../../hooks/useCurrentUser';

export const Dash = () => {
  const { user } = useCurrentUser();
  const logout = async () => {
    await auth.signOut();
  };

  return (
    <>
      <PageHead>Dash</PageHead>
      <div>
        Home, only logged
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <Button onClick={logout} variant="primary">
          Logout
        </Button>
        <Button onClick={logout} variant="secondary">
          Logout
        </Button>
      </div>
    </>
  );
};
