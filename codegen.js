require('dotenv').config({ path: '.env.local' });

module.exports = {
  schema: [
    {
      [`${process.env.HASURA_URL}/v1/graphql`]: {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_ADMIN,
        },
      },
    },
  ],
  overwrite: true,
  generates: {
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
    './graphql.schema.graphql': {
      plugins: ['schema-ast'],
    },
    './src/generated/graphql.ts': {
      documents: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.graphql'],
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
      config: {
        skipTypename: false,
        withHooks: true,
      },
    },
    './lib/generated/graphql.ts': {
      documents: ['./lib/**/*.graphql'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        skipTypename: false,
        withHooks: true,
      },
    },
  },
};
