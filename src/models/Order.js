const { Sequelize, DataTypes, Model } = require('sequelize')
const { sequelize } = require('../config/database')
const {instanceOf} = require("graphql/jsutils/instanceOf");
const {nonNullStringValidation} = require("../utils/Extras");
class Order extends Model {

}

Order.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    productCategory: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            ...nonNullStringValidation
        }
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            ...nonNullStringValidation
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true
        }
    },
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isFloat: true
        }
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            ...nonNullStringValidation,
            isIn: {
                args: [['Pending', 'Shipped', 'Delivered']],
                msg: " must be Pending, Shipped or Delivered"
            }
        }
    },
    shippingAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            ...nonNullStringValidation
        }
    },
    paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            ...nonNullStringValidation,
            isIn: {
                args: [['deposit', 'payment', 'invoice', 'withdrawal']],
                msg: " must be deposit, payment, invoice or withdrawal"
            }
        }
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: true
        }
    }
}, {
    sequelize,
    createdAt: 'orderDate',
    updatedAt: false
});

module.exports = Order;