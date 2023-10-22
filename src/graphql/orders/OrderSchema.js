const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Order {
        id: ID!
        userId: ID!
        productCategory: String
        productName: String
        quantity: Int
        totalPrice: Float
        orderDate: String
        status: String
        shippingAddress: String
        paymentMethod: String
        user: User
    }

    type Query {
        getOrdersByUserId(userId: ID!): [Order]
    }

    type Mutation {
    
        createOrder(
            userId: ID!
            productCategory: String!
            productName: String!
            quantity: Int!
            totalPrice: Float!
            status: String!
            shippingAddress: String!
            paymentMethod: String!
        ): Order
        
    }
`;

module.exports = typeDefs;