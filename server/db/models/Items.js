const database = require('./database')
const { Sequelize } = require('sequelize')

const Items = database.define('Items', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	price: {
		type: Sequelize.INTEGER,
	},
	description: {
		type: Sequelize.TEXT,
	},
	imageUrl: {
		type: Sequelize.TEXT,
		defaultValue:
			'https://images.unsplash.com/photo-1568595502714-5a8aa68c5fd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2133&q=80',
	},
})

module.exports = Items
