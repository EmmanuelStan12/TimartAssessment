const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        """This is the id of the user"""
        id: ID!
        """This is the username of the user"""
        username: String!
        """This is the email of the user"""
        email: String!
        """This is the password of the user"""
        password: String!
        """This is the firstName of the user"""
        firstName: String
        """This is the lastName of the user"""
        lastName: String
        """This is the birthdate of the user"""
        birthdate: String
        """This is the gender of the user"""
        gender: String
        """This is the phoneNumber of the user"""
        phoneNumber: String
        """This is the address of the user"""
        address: String
        """This is the country of the user"""
        country: String
        """This is the state of the user"""
        state: String
        """This is the city of the user"""
        city: String
        """This is the zipCode of the user"""
        zipCode: String
        """This is the profilePicture of the user"""
        profilePicture: String
    }
    type Query {
        """Fetches a user by the id provided"""
        getUserById(
            """This is the id of the user to be fetched"""
            id: ID!
        ): User
    }
    type Mutation {
    
        """Creates a new user"""
        createUser(
            """This is the username of the user"""
            username: String!
            """This is the email of the user"""
            email: String!
            """This is the password of the user"""
            password: String!
            """This is the firstName of the user"""
            firstName: String
            """This is the lastName of the user"""
            lastName: String
            """This is the birthdate of the user"""
            birthdate: String
            """This is the gender of the user"""
            gender: String
            """This is the phoneNumber of the user"""
            phoneNumber: String
            """This is the address of the user"""
            address: String
            """This is the country of the user"""
            country: String
            """This is the state of the user"""
            state: String
            """This is the city of the user"""
            city: String
            """This is the zipCode of the user"""
            zipCode: String
            """This is the profilePicture of the user"""
            profilePicture: String
        ): User
    }
`;

module.exports = typeDefs;