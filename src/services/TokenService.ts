import { auth, db, fn } from './firebase';
import { combineLatest, Observable, of, from } from 'rxjs';
import { switchMap, pluck, shareReplay, map, startWith } from 'rxjs/operators';
import { User } from 'firebase';
import { user, authState } from 'rxfire/auth';
import { docData } from 'rxfire/firestore';
import { httpsCallable } from 'rxfire/functions';
import { log } from '../utils/rxLog';

type StateTypes = 'in' | 'out';
export type AuthState = StateTypes | 'loading';

const refreshTokenFnRx = httpsCallable(fn, 'refreshToken');

const getUserWithClaims = (user: User): Observable<User> =>
  from(user.getIdToken()).pipe(
    switchMap(() => from(user.getIdTokenResult())),
    pluck('claims'),
    log('Claims :'),
    switchMap((claims) =>
      claims['https://hasura.io/jwt/claims']
        ? of(user)
        : refreshTokenFnRx({}).pipe(
            log('refreshed claims'),
            switchMap(() => from(user.getIdToken(true))),
            switchMap(() => of(user)),
          ),
    ),
  );

export const userWithCorrectToken$ = user(auth).pipe(
  log('User auth direct call'),
  switchMap((user) => (user ? getUserWithClaims(user) : of(undefined))),
  shareReplay({
    bufferSize: 1,
    refCount: true,
  }),
);

export const correctToken$ = userWithCorrectToken$.pipe(
  switchMap((user) => (user ? from(user.getIdToken()) : of(undefined))),
);

export const authState$: Observable<AuthState> = combineLatest([
  authState(auth).pipe(
    map((value) => (value ? { loading: true } : { loading: false })),
  ),
  userWithCorrectToken$.pipe(
    switchMap((user) =>
      user
        ? of(user).pipe(
            startWith(of({ value: user, loading: true })),
            map((value) => ({ value, loading: false })),
          )
        : of({ loading: false, value: null }),
    ),
  ),
]).pipe(
  log('pre result'),
  map(([authStateRaw, withToken]: any) => {
    if (withToken?.value) {
      return 'in';
    }
    if (authStateRaw.loading && !withToken.value) {
      return 'loading';
    }
    return 'out';
  }),
  log('result'),
  shareReplay({
    bufferSize: 1,
    refCount: true,
  }),
);

export const userRole$ = userWithCorrectToken$.pipe(
  switchMap((user) =>
    user
      ? combineLatest([
          from(user.getIdTokenResult()).pipe(
            map(
              (data) =>
                data.claims['https://hasura.io/jwt/claims']?.[
                  'x-hasura-default-role'
                ],
            ),
          ),
          docData<any>(db.doc(`/hasura/${user.uid}`)).pipe(
            map((data) => data?.claims?.['x-hasura-default-role']),
          ),
        ]).pipe(map(([a, b]) => a))
      : of(undefined),
  ),
  log('user role'),
  shareReplay({
    bufferSize: 1,
    refCount: true,
  }),
);

userRole$.subscribe(console.log);
