const database = require('./database')
const { Sequelize } = require('sequelize')

module.exports = database.define('Items', {
    name: {
        type: Sequelize.STRING, allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
    },
    description: {
        type: Sequelize.TEXT,
    },
    imageUrl: {},
})