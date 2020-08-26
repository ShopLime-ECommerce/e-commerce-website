const { Sequelize } = require('sequelize');
require('dotenv').config();
//connections
// const sequelize = new Sequelize('e_commerce', 'postgres', '1105', {
//     host: 'localhost',
//     dialect:  'postgres'
//   });
  const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect:  process.env.DB_TYPE
  });

  module.exports = sequelize;