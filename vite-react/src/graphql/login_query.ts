import { gql } from '@apollo/client';

export const SIGNIN_MUTATION = gql`
  mutation SigninUser($username: String!, $password: String!) {
    signin(username: $username, password: $password) {
      token
      message
      user{
        id
        firstname
        lastname
        email
        mobile
        username
        isactivated
        isblocked
        mailtoken
        userpic
        qrcodeurl
      }
    }
  }
  `;

  export interface User {
  id: string;
  firstname: string;
  lastname: string;  
  email: string;
  mobile: string;
  username: string;
  isactivated: number;
  isblocked: number;
  mailtoken: number;
  userpic: string;
  qrcodeurl: string;
}

export interface LoginUserData {
  signin: User;
}

export interface LoginUserVariables {
    username: string,
    password: string
}
