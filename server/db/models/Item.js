const { DataTypes, Model } = require('sequelize')
const sequelize = require('../database')

class Item extends Model {}

Item.init(
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
		price: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: 0,
		},
		description: {
			type: DataTypes.TEXT,
		},
	},
	{
		sequelize, // We need to pass the connection instance
		modelName: 'item', // We need to choose the model name
	}
)

module.exports = Item
