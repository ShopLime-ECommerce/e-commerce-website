const { DataTypes, Model } = require('sequelize')
const sequelize = require('../database')

class Review extends Model {}

Review.init(
	{
		title: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		content: { type: DataTypes.TEXT },
		rating: { type: DataTypes.BIGINT },
	},
	{
		sequelize,
		modelName: 'review',
	}
)

module.exports = Review
