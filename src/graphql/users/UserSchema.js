const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
        password: String!
        firstName: String
        lastName: String
        birthdate: String
        gender: String
        phoneNumber: String
        address: String
        country: String
        state: String
        city: String
        zipCode: String
        profilePicture: String
    }
    type Query {
        getUserById(id: ID!): User
    }
    type Mutation {
    
        createUser(
            username: String!
            email: String!
            password: String!
            firstName: String
            lastName: String
            birthdate: String
            gender: String
            phoneNumber: String
            address: String
            country: String
            state: String
            city: String
            zipCode: String
            profilePicture: String
        ): User
    }
`;

module.exports = typeDefs;