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

  type Publish {
    status: Boolean
    urlFile: String
  }

  type Publication {
    id: ID
    idUser: ID
    file: String
    typeFile: String
    createAt: String
  }

  type Comment {
    idPublication: ID
    idUser: User
    comment: String
    createAt: String
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

  input UserUpdateInput {
    name: String
    email: String
    currentPassword: String
    newPassword: String
    siteWeb: String
    description: String
  }

  input CommentInput {
    idPublication: ID
    comment: String
  }

  type Query {
    # User
    getUser(id: ID, username: String): User
    search(search: String): [User]

    #Follow
    isFollow(username: String!): Boolean
    getFollowers(username: String!): [User]
    getFolloweds(username: String!): [User]

    # Publication
    getPublications(username: String!): [Publication]

    # Comment
    getComments(idPublication: ID!): [Comment]
  }

  type Mutation {
    # User register
    register(input: UserInput): User
    # User login
    login(input: loginInput): Token
    #Update avatar: type Upload already defined by qraphQL / we need to define UpdateAvatar type
    updateAvatar(file: Upload): UpdateAvatar
    deleteAvatar: Boolean
    updateUser(input: UserUpdateInput): Boolean

    # Follow
    follow(username: String!): Boolean
    unFollow(username: String!): Boolean

    # Publication
    publish(file: Upload): Publish

    # Comment
    addComment(input: CommentInput): Comment
  }
`;
module.exports = typeDefs;
