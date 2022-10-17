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
    answers: [Answer]
  }

  type Group {
    _id: ID
    groupName: String
    groupColor: String
    members: [User]
  }

  type Question {
    _id: ID
    questionText: String
  }

  type Answer {
    _id: ID
    answerBody: String
    username: String
    createdAt: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    group(groupName: String): Group
    groups: [Group]
    answer(_id: ID): Answer
    answers(username: String): [Answer]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addGroup(groupName: String!): Group
    addAnswer(answerBody: String!): Answer
    addFriend(friendId: ID!): User
    addMember(groupId: ID!): Group
    removeMember(userId: ID!, groupId: ID!): Group
    deleteAnswer(_id: ID!): Answer
    deleteGroup(_id: ID!): Group
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;