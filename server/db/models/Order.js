const database = require('../database')
const Sequelize = require('sequelize')

// Creating the Orders model
const Orders = database.define('orders', {
	type: Sequelize.ENUM('pending', 'fulfilled'),
})

module.exports = Orders
