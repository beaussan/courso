import React, { PropsWithChildren, ReactNode, useEffect } from 'react';
import { useAuthContext } from '@/hooks/useAuthContext';
import { LoadingFullScreen } from '@/layouts/LoadingFullScreen';
import { useRouter } from 'next/router';
import { getNavLayout } from './NavBar';

interface WithRoleProps {
  roles: string[];
  redirectTo?: string;
}

export const WithRole = ({
  children,
  roles,
  redirectTo,
}: PropsWithChildren<WithRoleProps>) => {
  const { userRole } = useAuthContext();
  const router = useRouter();
  const hasRoleAccess = roles.includes(userRole);

  useEffect(() => {
    if (!hasRoleAccess && userRole) {
      console.log('[WithRole] redirect', { userRole });
      router.push(redirectTo ?? '..');
    }
  }, [hasRoleAccess]);

  if (!userRole) {
    return <LoadingFullScreen debugName="RouteWithRule no user role" />;
  }
  if (!hasRoleAccess) {
    return <LoadingFullScreen debugName="RouteWithRule user with no role" />;
  }

  return <>{children}</>;
};
const getLayout = (extraProps: WithRoleProps) => (page: ReactNode) =>
  getNavLayout(<WithRole {...extraProps}>{page}</WithRole>);
export const getLayoutRoleStudent = getLayout({ roles: ['student'] });
export const getLayoutRoleTeacher = getLayout({ roles: ['teacher'] });

export default WithRole;
