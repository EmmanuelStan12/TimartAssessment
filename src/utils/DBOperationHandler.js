const {ValidationError} = require("sequelize");
const db_operation_handler = async (operation) => {
    try {
        return await operation;
    } catch(e) {
        let msg = e.message;
        if(e instanceof ValidationError){
            msg = `ValidationError: ${e.errors[0].path} ${e.errors[0].message}`
        } else if (e.name && e.name === 'SequelizeForeignKeyConstraintError') {
            msg = `${e.fields[0]} with ${e.value} does not exist in ${e.table} or does not exist as a Foreign Key Relationship`
        }
        console.error(msg);
        throw new Error(msg);
    }
}

module.exports = db_operation_handler;