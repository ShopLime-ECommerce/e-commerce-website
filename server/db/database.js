const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
	'shoplime',
	'postgres',
	'1105',
	{
		host: 'localhost',
		dialect: 'postgres',
		logging: false,
	}
)

module.exports = sequelize
