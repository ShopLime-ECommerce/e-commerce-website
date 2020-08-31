const User = require('./User')
const Item = require('./Item')
const Order = require('./Order')
const Review = require('./Review')

Order.belongsTo(User)
Order.hasMany(Item)

User.hasMany(Order)

Item.belongsTo(Order)

Review.belongsTo(Item)
Review.belongsTo(User)

module.exports = {
	User,
	Item,
	Order,
	Review,
}
