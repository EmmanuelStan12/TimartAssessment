const {createOrder, getOrdersByUserId} = require("../../services/OrderService");
const {getUserById} = require("../../services/UserService");

const orderResolvers = {
    Query: {
        getOrdersByUserId: async (_, { userId }) => {
            try {
                return await getOrdersByUserId(userId);
            } catch (error) {
                throw new Error(`${error.message}`);
            }
        },
    },
    Mutation: {
        createOrder: async (_, data) => {
            try {
                const userId = data.userId;
                delete data.userId;
                return await createOrder(userId, data);
            } catch (error) {
                throw new Error(`${error.message}`);
            }
        }
    },
    Order: {
        user: async (obj, args, context, info) => {
            const userId = obj.userId
            return await getUserById(userId)
        }
    }
};

module.exports = orderResolvers;
