const Sequelize = require('sequelize')

// Setting up the database
const database = new Sequelize('postgres://postgres@localhost:5432/shoplime', {
	logging: false,
})

module.exports = database
