const { DataTypes, Model } = require('sequelize')
const sequelize = require('../database')

class User extends Model {}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		imageUrl: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isLongEnough: (val) => {
					if (val.length < 7) {
						throw new Error(' Password has to be longer than 6 characters')
					}
				},
			},
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize, // We need to pass the connection instance
		modelName: 'user', // We need to choose the model name
	}
)

module.exports = User
