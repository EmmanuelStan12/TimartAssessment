const userSchema = require('./users/UserSchema');
const userResolvers = require('./users/UserResolver');
const orderSchema = require('./orders/OrderSchema');
const orderResolvers = require('./orders/OrderResolver');
const { gql } = require('apollo-server-express')

// Merge the schemas
const typeDefs = gql`
  ${userSchema}
  ${orderSchema}
`;

const resolvers = [userResolvers, orderResolvers];

module.exports = {
    typeDefs,
    resolvers
}