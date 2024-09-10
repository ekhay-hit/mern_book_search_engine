import { gql } from "@apollo/client";
export const GET_ME = gql`
  query me {
    me {
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
// sigleUser you can laterley copy itform the GUI
export const QUERY_SINGLE_USER = gql`
  query singleUser($singleId: ID!) {
    users(userId: $profileId) {
      id
      userName
    }
  }
`;
