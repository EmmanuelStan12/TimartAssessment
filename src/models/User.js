const { Sequelize, DataTypes, Model } = require('sequelize')
const { sequelize } = require('../config/database')
const {nonNullStringValidation, stringValidation} = require("../utils/Extras");
class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: 'already exists'
        },
        validate: {
            ...nonNullStringValidation
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: 'already exists'
        },
        validate: {
            isEmail: {
                args: true,
                msg: 'must be a valid email address, example: johndoe@mail.com'
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salt: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        validate: {
            ...stringValidation
        }
    },
    lastName: {
        type: DataTypes.STRING,
        validate: {
            ...stringValidation
        }
    },
    birthdate: {
        type: DataTypes.DATE,
        validate: {
            isDate: {
                args: true,
                msg: 'is not a valid date'
            }
        }
    },
    gender: {
        type: DataTypes.STRING,
        validate: {
            ...stringValidation
        }
    },
    phoneNumber: {
        type: DataTypes.STRING,
        validate: {
            ...stringValidation
        }
    },
    address: {
        type: DataTypes.STRING,
        validate: {
            ...stringValidation
        }
    },
    country: {
        type: DataTypes.STRING,
        validate: {
            ...stringValidation
        }
    },
    state: {
        type: DataTypes.STRING,
        validate: {
            ...stringValidation
        }
    },
    city: {
        type: DataTypes.STRING,
        validate: {
            ...stringValidation
        }
    },
    zipCode: {
        type: DataTypes.STRING,
        validate: {
            ...stringValidation
        }
    },
    profilePicture: {
        type: DataTypes.STRING,
        validate: {
            ...stringValidation
        }
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, { sequelize });

module.exports = User;