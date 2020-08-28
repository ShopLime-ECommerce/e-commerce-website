const User = require('./User')
const Item = require('./Item')
const Order = require('./Order')

Order.belongsTo(User)
User.hasMany(Order)
Item.belongsTo(Order)
Order.hasMany(Item)

module.exports = {
    User,
    Item,
    Order,
}