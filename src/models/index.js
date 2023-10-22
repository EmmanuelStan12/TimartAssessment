const UserModel = require('./User');
const OrderModel = require('./Order');
const { sequelize } = require('../config/database')
const {createFakeUsers, createFakeOrders} = require("../utils/FakerUtils");

UserModel.hasMany(OrderModel, { as: "orders", foreignKey: 'userId' });

async function syncModels() {
    try {

        const { count, rows } = await UserModel.findAndCountAll();
        if (count === 0 && rows.length === 0) {
            await sequelize.sync({ force: true });

            const fakeUsers = createFakeUsers();
            const users = await UserModel.bulkCreate(fakeUsers);
            const userIds = users.map(user => user.id);
            const fakeOrders = createFakeOrders(userIds);
            await OrderModel.bulkCreate(fakeOrders);
        } else {
            await sequelize.sync()
        }

        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Unable to sync models with the database:', error);
    }
}

syncModels().catch((e) => console.log(e))

module.exports = {
    User: UserModel,
    Order: OrderModel
};