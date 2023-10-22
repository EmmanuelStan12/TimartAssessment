const db_operation_handler = require("../utils/DBOperationHandler");
const { Order } = require("../models");
const { Op } = require("sequelize");

const getOrdersByUserId = async (userId, limit, offset) => {
    return await db_operation_handler(Order.findAll({
        where: {
            userId: {
                [Op.eq]: userId
            }
        },
        offset,
        limit
    }))
}

const createOrder = async (userId, rest) => {
    return await db_operation_handler(
        Order.create({
            userId: userId,
            ...rest
        })
    )
}

const createOrders = async (orders) => {
    return await db_operation_handler(Order.bulkCreate(orders))
}

module.exports = {
    createOrder,
    getOrdersByUserId,
    createOrders
}