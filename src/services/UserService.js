const { sequelize } = require('../config/database')
const { User } = require("../models");
const db_operation_handler = require("../utils/DBOperationHandler");
const UserModel = require("../models/User");
const createUser = async (args) => {
    return await db_operation_handler(User.create(args))
}

const getUserById = async (id) => {
    return await db_operation_handler(User.findByPk(id));
}

const getTopTenUsersByMostOrders = async () => {
    /*
    Raw query: SELECT * FROM User INNER JOIN Order o ON o.user_id = u.id GROUP BY o.user_id ORDER BY COUNT(o.user_id) DESC LIMIT 10
    */
    const promise = sequelize.query(
        'SELECT u.* FROM Users u INNER JOIN Orders o ON o.userId = u.id GROUP BY o.userId ORDER BY COUNT(o.userId) DESC LIMIT 10', {
            model: UserModel,
            mapToModel: true
        }
    )

    return await db_operation_handler(promise);
}

const createUsers = async (args) => {
    return await db_operation_handler(User.bulkCreate(args))
}

module.exports = {
    createUser,
    getUserById,
    getTopTenUsersByMostOrders,
    createUsers
}