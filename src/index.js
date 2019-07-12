const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const {Todo} = require('./db')

const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  dataSources: () => ({
    todoDB: Todo
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});