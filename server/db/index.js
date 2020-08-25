const database = require('./db')
const User = require('./User')
const Items = require('./Items')

// Creating associations for the database models

module.exports = {
	database,
	User,
	Items,
}
