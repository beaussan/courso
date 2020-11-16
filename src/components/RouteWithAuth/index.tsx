import React, { useEffect } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { RouteProps } from 'react-router';
import { LoadingFullScreen } from '../../pages/LoadingFullScreen';
import { useAuthState } from '../../hooks/useAuthState';
import { useCurrentUser } from '../../hooks/useCurrentUser';

export const RouteWithRule: React.FC<RouteProps> = ({ ...rest }) => {
  const authState = useAuthState();
  const navigate = useNavigate();
  const { user, loading: userLoading, error } = useCurrentUser();

  useEffect(() => {
    if (authState === 'out') {
      navigate('/login');
    }
  }, [authState, navigate]);

  if (authState === 'loading' || userLoading) {
    return <LoadingFullScreen />;
  }

  if (authState === 'out') {
    return <LoadingFullScreen />;
  }
  if (!user) {
    return <LoadingFullScreen />;
  }
  return <Route {...rest} />;
};
