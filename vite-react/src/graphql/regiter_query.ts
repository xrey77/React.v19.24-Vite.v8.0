import { gql } from '@apollo/client';

export const SIGNUP_MUTATION = gql`
  mutation SignupUser($input: SignupInput!) {
    signup(input: $input) {
      message
    }
  }
  `

interface User {
  id: string;
  firstname: string;
  lastname: string;  
  email: string;
  mobile: string;
  username: string;
  password: string;
}

export interface CreateUserData {
  signup: User;
}

export interface CreateUserVariables {
  input: {
    firstname: string,
    lastname: string,   
    email: string,
    mobile: string,
    username: string,
    password: string,
  }
}
