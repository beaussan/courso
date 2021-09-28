import NextAuth, { Account, Profile, Session } from 'next-auth';
import Providers from 'next-auth/providers';
import { HasuraAdaptor } from '@lib/nextAuth/hasuraAuthAdapter';
import jwt from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';
import { User } from '@lib/generated/graphql';
import { gqlSdk } from '@lib/gql';
import { sendLoginEmail } from '@lib/mail';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Email({
      sendVerificationRequest: async (params) => {
        if (process.env.NODE_ENV === 'development') {
          console.log('----------------------------------------------');
          console.log(`Email send to ${params.identifier}`);
          console.log(`Url: ${params.url}`);
          console.log('----------------------------------------------');
        }

        await sendLoginEmail(params.identifier, params.url);
      },
    }),

    /*
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,

      // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
      scope: 'read:user',
    }),

     */
    // ...add more providers here
  ],

  debug: process.env.NEXT_AUTH_DEBUG_LOG === 'yes',

  session: {
    jwt: true,
  },

  pages: {
    signIn: '/login',
  },

  jwt: {
    secret: process.env.NEXT_AUTH_JWT_SECRET_PRIVATE,

    verificationOptions: {
      algorithms: ['RS512'],
    },
    encode: async (params) => {
      if (!params || !params.token || !params.token.sub) {
        return 'undefined';
      }
      // console.log('ENCODE : ', params);
      const { token, secret } = params;
      const jwtClaims: JWT = {
        ...token,
        sub: token?.sub?.toString(),
        iat: Date.now() / 1000,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
      };
      const encodedToken = jwt.sign(jwtClaims, secret, { algorithm: 'RS512' });
      return encodedToken;
    },

    decode: async (params) => {
      if (!params || !params.token) {
        throw new Error('No params in decode');
      }
      const { token, secret } = params;
      const decodedToken = jwt.verify(token, secret, { algorithms: ['RS512'] });
      return decodedToken as JWT;
    },
  },

  adapter: HasuraAdaptor({}),

  callbacks: {
    async session(session: Session, userOrToken: JWT) {
      // console.log('SESSION : ', { session, userOrToken });
      const encodedToken = jwt.sign(
        userOrToken,
        process.env.NEXT_AUTH_JWT_SECRET_PRIVATE as string,
        { algorithm: 'RS512' },
      );

      const claims = userOrToken?.['https://hasura.io/jwt/claims'];

      if (claims) {
        session.role = claims['x-hasura-default-role'];
        session.allowedRoles = claims['x-hasura-allowed-roles'];
      }

      session.id = userOrToken.id;
      session.token = encodedToken;

      return session;
    },

    async jwt(
      token: JWT,
      user?: User,
      account?: Account,
      profile?: Profile,
      isNewUser?: boolean,
    ) {
      console.log('JWT : ', { token, user, account, profile, isNewUser });

      if (!user) {
        return token;
      }

      token = {
        ...token,
        'id': user?.id,
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': user.allowed_roles.map((role) => role.role),
          'x-hasura-default-role': user.default_role,
          'x-hasura-user-id': user?.id,
        },
      };
      console.log('JWT AFTER : ', token);

      return token;
    },

    async signIn({ user, account, profile, email, credentials }) {
      if (process.env.NEXT_AUTH_IS_SELF_LOGIN_ALLOWED === 'yes') {
        return true;
      }
      console.log('SIGN IN', { user, account, profile, email, credentials });
      if (email) {
        console.log('Email found, find user by email');
        const { maybeUser } = await gqlSdk.findUserByEmail({ email });
        console.log('SIGN IN', {
          user,
          account,
          profile,
          email,
          credentials,
          maybeUser,
        });

        if (maybeUser.length > 0) {
          console.log('user found');
          return true;
        } else {
          console.log('user not found');
          // Return false to display a default error message
          return false;
          // Or you can return a URL to redirect to:
          // return '/unauthorized'
        }
      }
      console.log('Nothing found');
      return false;
    },
  },
});
