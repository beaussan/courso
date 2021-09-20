import NextAuth from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    user: {
      name?: string;
      email?: string;
      image?: string;
    };
    role: string;
    token: string;
    id: string;
    allowedRoles: string[];
    expire: string;
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    'sub': string;
    'iat': number;
    'exp': number;
    'id': string;
    'https://hasura.io/jwt/claims': {
      'x-hasura-allowed-roles': string[];
      'x-hasura-default-role': string;
      'x-hasura-user-id': string;
    };
  }
}
