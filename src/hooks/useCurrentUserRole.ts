import { userRole$ } from '../services/TokenService';
import { useObservable } from './useObservable';

export const useCurrentUserRole = (): string => {
  return useObservable(userRole$);
};
