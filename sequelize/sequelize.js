const Sequelize = require('sequelize');


const sequelize = new Sequelize('iauro', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
});
module.exports = sequelize;