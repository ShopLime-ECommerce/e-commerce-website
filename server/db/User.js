const database = require('./database')
const { Sequelize } = require('sequelize')

const Users = database.define('user', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { notEmpty: true },
	},
	imageUrl: {
		type: Sequelize.TEXT,
		defaultValue:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png',
	},
	address: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { notEmpty: true },
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { isEmail: true, notEmpty: true },
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { notEmpty: true },
	},
})

module.exports = Users
