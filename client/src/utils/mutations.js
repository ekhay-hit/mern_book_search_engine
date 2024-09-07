import {gql} from '@apollo/client'

export const SINGUP = gql`
mutation signup($name:String!, $email:String!, $password:String!){
singup(name:$name, email:$email, password:$password){
_id
name
email
}
}
`;

export const LOGIN = gql`
mutation login($name:String, $email:String!, $password:String!){
login(name:$name, email:$email, password:$password){
_id
name
email
}
}

`