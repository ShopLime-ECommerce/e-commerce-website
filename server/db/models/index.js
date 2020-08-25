const User = require('./User')
const Items = require('./Items')
const Order = require('./Order')

/*
    Creating the model associations for User, Items, Order
    and exporting the models for later use
*/

User.hasMany(Orders)
Order.belongsTo(User)
Order.hasMany(Items)

module.exports = {
	User,
	Items,
	Order,
}
