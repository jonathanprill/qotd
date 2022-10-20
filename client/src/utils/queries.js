// This file will store all of the GraphQL query requests.
import { gql } from '@apollo/client';




// For the Profile Page
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friends {
        _id
        username
      }
      groups {
        _id
        groupName
      }
      answers {
        _id
        answerBody
      }
    }
  }
`;

// retrieve all data related to the logged-in user
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friends {
        _id
        username
      }
      groups{
        _id
        groupName
      }
      answers {
        _id
        answerBody
      }
    }
  }
`;

// Query Answers
export const QUERY_ANSWERS = gql`
  query answers($username: String) {
    answers(username: $username) {
      _id
      answerBody
      createdAt
      username
    }
  }
`;

// Query Groups
export const QUERY_GROUPS = gql`
{
  groups {
    _id
    groupName
  }
}
`;

// Query Single Group
export const QUERY_GROUP = gql`
query group($groupName: String!) {
  group(groupName: $groupName) {
    _id
    createdAt
    groupColor
    groupName
    members{
      _id
      username
    }
  }
}
`;