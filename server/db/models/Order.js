const database = require('../database')
const Sequelize = require('sequelize')

// Creating the Orders model
const Order = database.define('order', {
	type: Sequelize.ENUM('pending', 'fulfilled'),
})

module.exports = Order
