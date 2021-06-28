import { useObservable } from './useObservable';
import {
  authState$,
  correctToken$,
  userRole$,
  userWithCorrectToken$,
} from '@/services/TokenService';
import React, { createContext, useContext } from 'react';
import { distinctUntilChanged } from 'rxjs/operators';

function useAuthContextValue() {
  const firebaseUser = useObservable(userWithCorrectToken$);
  const authStatus = useObservable(authState$);
  const userRole = useObservable(userRole$);
  const token = useObservable(
    correctToken$.pipe(distinctUntilChanged((prev, curr) => prev === curr)),
  );

  return {
    firebaseUser,
    authStatus,
    token,
    userRole,
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
  const isUserSignIn = context.authStatus === 'in' && context.firebaseUser;
  const isAuthReady =
    context.authStatus === 'loading' || context.authStatus === undefined;
  return {
    ...context,
    isUserSignIn,
    isAuthReady,
  };
}

export const useCurrentUserRole = (): string => {
  const { userRole } = useAuthContext();
  return userRole;
};
