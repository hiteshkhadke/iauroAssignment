const sequelize_connection = require('./sequelize');
let users_model = require('../users/users.model');

let initDataBase = {
    "init": async () => {
        await sequelize_connection.sync();
    }
}

module.exports = initDataBase;
