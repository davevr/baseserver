const { ApolloServer, makeExecutableSchema } = require('apollo-server');
//const {schema } = require('./data/schema')
const {merge} = require('lodash');

const typeDefs = require('./data/typedefs');
const resolvers  = require('./data/resolvers');
const mocks = require('./data/mocks');


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

// add mocks

const schema = makeExecutableSchema({
    typeDefs: [typeDefs],
    resolvers: merge(resolvers, mocks),
});

const server = new ApolloServer({
     schema,
    cors: {
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
      },
     });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
