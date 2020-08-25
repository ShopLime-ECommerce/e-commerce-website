const database = require('./database')
const Sequelize = require('sequelize')
const Items = require('./items')

// Creating the Orders model
const Orders = database.define('orders', {
	type: Sequelize.ENUM('pending', 'fulfilled'),
})

// Creating an one-to-many association for Orders model which could have many items
Orders.hasMany(Items)

module.exports = Orders
