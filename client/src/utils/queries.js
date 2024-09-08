import { gql } from "@apollo/client";

// sigleUser you can laterley copy itform the GUI
export const QUERY_SINGLE_USER = gql`
  query singleUser($singleId: ID!) {
    users(userId: $profileId) {
      _id
      userName
    }
  }
`;
