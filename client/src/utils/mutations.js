import {gql} from '@apollo/client'

export const ADD_USER = gql`
mutation addUser($name:String!, $email:String!, $password:String!){
singup(userName:$name, email:$email, password:$password){
_id
name
email
}
}
`;

export const LOGIN_USER = gql`
mutation loginUser($userName:String, $email:String!, $password:String!){
login(userName:$name, email:$email, password:$password){
_id
name
email
}
}

`