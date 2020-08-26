const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('../database')
const User = require('./user')
const Item = require('./item')

class Order extends Model {}

Order.init(
	{
		// Model attributes are defined here
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		itemId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		status: {
			type: DataTypes.ENUM({
				values: ['pending', 'fulfilled'],
			}),
		},
	},
	{
		// Other model options go here
		sequelize, // We need to pass the connection instance
		modelName: 'order', // We need to choose the model name
	}
)

Order.belongsTo(User)

// the defined model is the class itself
console.log(Order === sequelize.models.Order) // true
module.exports = Order
