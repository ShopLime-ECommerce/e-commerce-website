const User = require('./User')
const Items = require('./Item')
const Order = require('./Order')

/*
    Creating the model associations for User, Items, Order
    and exporting the models for later use
*/

User.hasMany(Order)
Order.belongsTo(User)
Order.hasMany(Item)

module.exports = {
	User,
	Item,
	Order,
}
