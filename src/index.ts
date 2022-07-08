import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { addResolversToSchema } from '@graphql-tools/schema';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { createServer } from 'http';
import { join } from 'path';
import { firebaseInit } from '~/lib/firebase';
import { resolvers } from '../src/resolvers';

const schema = loadSchemaSync(join(__dirname, '../schema.graphql'), {
  loaders: [new GraphQLFileLoader()],
});

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers,
});

const start = async () => {
  firebaseInit();

  const app = express();
  const httpServer = createServer(app);

  const server = new ApolloServer({
    schema: schemaWithResolvers,
  });

  await server.start();

  server.applyMiddleware({
    app,
  });

  const port = process.env.PORT || 4000;

  httpServer.listen({ port }, () => {
    console.log('NODE_ENV is ' + process.env.NODE_ENV);
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
  });
};

start().catch((e) => {
  console.log(e);
});
