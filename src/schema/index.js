const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    todoes: [Todo]!
    todo(id: Int!): Todo
  }

  type Todo {
    id: Int
    content: String!
    completed: Boolean!
  }

  type Mutation {
    add(content: String!): Todo
    edit(id: Int!): Todo
    remove(id: Int!): [Todo]!
  }
`;


module.exports = typeDefs;