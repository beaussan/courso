import React from 'react';
import { useCurrentUserRole } from '../../hooks/useCurrentUserRole';
import { Navigate, Route } from 'react-router-dom';
import { RouteProps } from 'react-router';
import { LoadingFullScreen } from '../../pages/LoadingFullScreen';

interface RouteWithRulesProps extends RouteProps {
  roles: string[];
  redirectTo?: string;
}
export const RouteWithRule: React.FC<RouteWithRulesProps> = ({
  roles,
  ...rest
}) => {
  const userRole = useCurrentUserRole();
  const hasRoleAccess = roles.includes(userRole);
  if (!userRole) {
    return <LoadingFullScreen />;
  }
  if (!hasRoleAccess) {
    return <Navigate to=".." />;
  }
  return <Route {...rest} />;
};
