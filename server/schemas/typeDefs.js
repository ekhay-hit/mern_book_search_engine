const typeDefs = `

type Book {
authors: String
description: String
bookId: String
image: String
link: String
title: String
}

type User {
id:ID
username: String
email: String
bookCount: String
savedBooks: [bookSchema]
}

type Auth {
token: ID!
profile:Profile
}

type Query {
books:[Book]
# will return a single user
user(id: ID!):User
}

type Mutation{
addUser(userName: String!, email: String!, password: String!): Auth
loginUser(email: String!, password: String!): Auth

}


`;
module.exports = typeDefs;
