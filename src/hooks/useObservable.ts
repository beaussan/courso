import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

export function useObservable<T>(observable: Observable<T>): T {
  const [state, setState] = useState();
  useEffect(() => {
    const sub = observable.subscribe(setState);
    return () => sub.unsubscribe();
  }, [observable]);

  return state;
}
