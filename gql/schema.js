const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID
    name: String
    username: String
    email: String
    siteWeb: String
    description: String
    password: String
    avatar: String
    createAt: String
  }

  type Token {
    token: String
  }

  type UpdateAvatar {
    status: Boolean
    urlAvatar: String
  }

  input UserInput {
    name: String!
    username: String!
    email: String!
    password: String!
  }

  input loginInput {
    email: String!
    password: String!
  }

  type Query {
    # User
    getUser(id: ID, username: String): User
  }

  type Mutation {
    # User register
    register(input: UserInput): User
    # User login
    login(input: loginInput): Token
    #Update avatar: type Upload already defined by qraphQL / we need to define UpdateAvatar type
    updateAvatar(file: Upload): UpdateAvatar
    deleteAvatar: Boolean
  }
`;
module.exports = typeDefs;
