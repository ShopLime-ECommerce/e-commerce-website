const { DataTypes, Model } = require('sequelize')
const sequelize = require('../database')
const crypto = require('crypto')

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
				notEmpty: true,
			},
		},
		role: {
			type: DataTypes.ENUM('user', 'admin'),
			defaultValue: 'user',
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		salt: { type: DataTypes.STRING },
	},
	{
		sequelize, // We need to pass the connection instance
		modelName: 'user', // We need to choose the model name
	}
)

User.prototype.correctPassword = (candidatePwd) =>
	User.encryptPassword(candidatePwd, this.salt) === this.password

User.encryptPassword = (plainText, salt) =>
	crypto.createHash('RSA-SHA256').update(plainText).update(salt).digest('hex')

const setSaltAndPassword = (user) => {
	if (user.changed('password')) {
		user.salt = crypto.randomBytes(16).toString('base64')
		user.password = User.encryptPassword(user.password, user.salt)
	}
}

User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)

module.exports = User
