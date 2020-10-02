import { AuthState, authState$ } from '../services/TokenService';
import { useObservable } from './useObservable';

export const useAuthState = (): AuthState => {
  return useObservable(authState$);
};
