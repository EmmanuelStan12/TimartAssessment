const {createOrder, getOrdersByUserId} = require("../../services/OrderService");
const {getUserById} = require("../../services/UserService");
const moment = require("moment");

const orderResolvers = {
    Query: {
        getOrdersByUserId: async (_, { userId, limit, offset }) => {
            try {
                if (!limit || !offset) {
                    return await getOrdersByUserId(userId);
                }
                return await getOrdersByUserId(userId, limit, offset)
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
                const user = await getUserById(userId)
                if (user !== null) {
                    return await createOrder(userId, data);
                }
                throw new Error(`User with ${userId} does not exist`)
            } catch (error) {
                throw new Error(`${error.message}`);
            }
        }
    },
    Order: {
        user: async (obj, args, context, info) => {
            const userId = obj.userId
            return await getUserById(userId)
        },
        orderDate: (obj, args, context, info) => {
            return moment(obj.orderDate).format("dddd, MMMM Do YYYY, h:mm:ss a")
        }
    }
};

module.exports = orderResolvers;
