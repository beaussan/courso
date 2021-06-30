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
  documents: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.graphql'],
  overwrite: true,
  generates: {
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
    './graphql.schema.graphql': {
      plugins: ['schema-ast'],
    },
    './src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
      config: {
        skipTypename: false,
        withHooks: true,
      },
    },
  },
};
