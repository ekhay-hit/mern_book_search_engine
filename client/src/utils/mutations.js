import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        email
        id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($book: BookInput!) {
    saveBook(book: $book) {
      id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($bookId: ID!) {
    deleteBook(bookId: $bookId) {
      id
      username
      email
      bookCount
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
