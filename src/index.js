const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const {Todo} = require('./db')
let todoDatabase = {
  counter: 2,
  data: [
    {
      id: 1,
      content: 'Hack fb for me',
      completed: true
    },
    {
      id: 2,
      content: 'Nothing better than me',
      completed: false
    }
  ]
}

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