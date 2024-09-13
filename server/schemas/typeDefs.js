const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
    books: [Book]
    # will return a single user
    user(id: ID!): User
  }

  type Book {
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type User {
    id: ID
    username: String
    email: String
    bookCount: String
    savedBooks: [Book]
  }

  type Auth {
    token: String
    user: User
  }
  input BookInput {
    bookId: String!
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    saveBook(book: BookInput!): User

    deleteBook(bookId: ID!): User
  }
`;
module.exports = typeDefs;
