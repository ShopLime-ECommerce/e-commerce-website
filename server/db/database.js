const { Sequelize } = require('sequelize')

module.exports = new Sequelize('ecommerce', 'postgres', '1105', {
	host: 'localhost',
	dialect: 'postgres',
	logging: false,
})
