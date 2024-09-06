const typeDefs = `

type Book {
_id:ID
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
password: String
savedBooks: [bookSchema]
}

type Query {
books:[Book]
# will return a single user
user(id: ID!):User
}

type Mutation{


}
`;
module.exports = typeDefs;
