const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type Pet{
        id: ID!
        createdAt: String!
        name: String!
        type: String!
  }
  type User{
    id:ID!
    username: String
  }
  type Query{
    pets:[Pet]!
  }
`;

module.exports = typeDefs
