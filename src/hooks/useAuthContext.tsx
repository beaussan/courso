import { AuthState } from '@/services/TokenService';
import React, { createContext, useContext } from 'react';
import { useSession } from 'next-auth/client';

function useAuthContextValue() {
  const [session, loading] = useSession();

  const authStatus: AuthState = loading ? 'loading' : session ? 'in' : 'out';
  console.log(session);

  return {
    authStatus,
    user: session?.user,
    userId: session?.id,
    token: session?.token ?? null,
    userRole: session?.role ?? null,
    allowedRoles: session?.allowedRoles ?? [],
  };
}

export type AuthContext = ReturnType<typeof useAuthContextValue>;

const Context = createContext<AuthContext | undefined>(undefined);

export const AuthContextProvider: React.FC = (props) => {
  const value = useAuthContextValue();
  return <Context.Provider value={value} {...props} />;
};
export const MockAuthContextProvider: React.FC<{ params: AuthContext }> = (
  props,
) => {
  return <Context.Provider value={props.params} {...props} />;
};

export function useAuthContext() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error(`useAuthContext must be used within a AuthContextProvider`);
  }
  return {
    ...context,
  };
}

export const useCurrentUserRole = (): string => {
  const { userRole } = useAuthContext();
  return userRole ?? '';
};
