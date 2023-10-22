const { Sequelize } = require('sequelize');
require('dotenv').config();

const { DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST, DB_DIALECT } = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT
});

async function initiate_db_connection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

async function close_db_connection() {
    await sequelize.close();
    console.log('Connection closed successfully')
}

module.exports = {
    sequelize,
    initiate_db_connection,
    close_db_connection
};