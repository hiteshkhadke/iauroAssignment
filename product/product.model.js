// Include Sequelize module.
const Sequelize = require('sequelize');

/* Import sequelize object, Database connection pool managed by Sequelize */
const sequelize_connection = require('../sequelize/sequelize');


const product = sequelize_connection.define(
  'product',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    is_display: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    },
    created_by: {
      type: Sequelize.INTEGER,
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

module.exports = product;
