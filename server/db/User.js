const database = require('./database')
const { Sequelize } = require('sequelize')

module.exports = database.define('user', {
    name: {
        type: Sequelize.STRING, allowNull: false, validate: { notEmpty: true }
    },
    imageUrl: {},
    address: {
        type: Sequelize.STRING, allowNull: false, validate: { notEmpty: true }
    },
    email: {
        type: Sequelize.STRING, allowNull: false, validate: { isEmail: true, notEmpty: true }
    },
    password: {
        type: Sequelize.STRING, allowNull: false, validate: { notEmpty: true }
    },
})