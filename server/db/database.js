const Sequelize = require('sequelize')

module.exports = new Sequelize('postgres://postgres@localhost:5432/shoplime', { logging: false })