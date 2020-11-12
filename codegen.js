module.exports = {
  schema: [
    {
      'https://devgrades.nbe.io/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
        },
      },
    },
  ],
  documents: ['./src/**/*.tsx', './src/**/*.ts'],
  overwrite: true,
  generates: {
    './src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './src/generated/apolloHelpers.ts': {
      plugins: ['typescript-apollo-client-helpers'],
      config: {
        requireKeyFields: true,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
    './graphql.schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
};
