// Type definitions, or TypeDefs for short, involves literally defining every piece of data that the client can expect to work with through a query or mutation.

// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    groups: [Group]
    friends: [User]
  }

  type Group {
    _id: ID
    groupName: String
    groupColor: String
    members: [User]
    question: [Question]
  }

  type Question {
    _id: ID
    questionText: String
    answers: [Answer]
  }

  type Answer {
    _id: ID
    answerBody: String
    username: String
    groupName: String
    createdAt: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    groups(username: String): [Group]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addGroup(groupName: String!): Group
    addAnswer(questionId: ID!, answerBody: String!): Group
    addFriend(friendId: ID!): User
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;