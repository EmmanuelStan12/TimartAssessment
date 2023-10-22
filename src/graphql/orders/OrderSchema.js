const {gql} = require('apollo-server-express')

const typeDefs = gql`
    """This is a single order"""
    type Order {
        """This is the id of this order"""
        id: ID!
        """This is the userId of the user that has the order"""
        userId: ID!
        """This is the product category of this order"""
        productCategory: String
        """This is the product name of this order"""
        productName: String
        """This is the quantity of this order"""
        quantity: Int
        """This is the total price of this order"""
        totalPrice: Float
        """This is the date the order was placed"""
        orderDate: String
        """This is the status of this order, it can be Pending, Shipped or Delivered"""
        status: String
        """This is the address where the order is to be delivered"""
        shippingAddress: String
        """This is the method that this order is to be paid for after or before delivery"""
        paymentMethod: String
        """This is the user that has this order"""
        user: User
    }

    type Query {
        """Fetches a list of orders that belongs to the user with the id specified"""
        getOrdersByUserId(
            """This is the userId of the user"""
            userId: ID!,
            """This is the limit as to how many orders to fetch"""
            limit: Int,
            """This indicates the number of orders to skip before fetching the next set, it works along with limit"""
            offset: Int
        ): [Order]
    }

    type Mutation {
   
        """Creates a new Order"""
        createOrder(
            """This is the userId of the user that has the order"""
            userId: ID!
            """This is the product category of this order"""
            productCategory: String!
             """This is the product name of this order"""
            productName: String!
            """This is the quantity of this order"""
            quantity: Int!
            """This is the total price of this order"""
            totalPrice: Float!
            """This is the address where the order is to be delivered"""
            shippingAddress: String!
            """This is the method that this order is to be paid for after or before delivery"""
            paymentMethod: String!
        ): Order
        
    }
`;

module.exports = typeDefs;