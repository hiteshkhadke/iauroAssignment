// Include Sequelize module.
const Sequelize = require('sequelize');

/* Import sequelize object, Database connection pool managed by Sequelize */
const sequelize_connection = require('../sequelize/sequelize');


const user = sequelize_connection.define(
  'users',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    role_type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    is_deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    created_ts: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: true
    },
    updated_ts: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: true
    },
  },
  {
    timestamps: false,
    underscored: true
  }
);

module.exports = user;
