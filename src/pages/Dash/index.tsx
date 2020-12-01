import React, { FunctionComponent, ReactElement } from 'react';
import { Button } from '../../components/Button';
import { auth } from '../../services/firebase';
import { PageHead } from '../../components/PageHead';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { Wip } from '../../components/Wip';
import { Logo } from '../../components/Logo';
import { Feedback } from '../../components/Feedback';

export const Dash = () => {
  const { user } = useCurrentUser();
  const logout = async () => {
    await auth.signOut();
  };

  return (
    <>
      <PageHead>Dash</PageHead>
      <div>
        <div>Logged as {user?.email}</div>
        <Button onClick={logout} variant="secondary">
          Logout
        </Button>
        <Feedback />
      </div>
      <Wip
        todo={[
          'Short list of what is up on the platform (grades, handoff, ...)',
          `Prettier print than what's there...`,
        ]}
      />
    </>
  );
};
