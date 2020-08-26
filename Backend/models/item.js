const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const DataTypes =  Sequelize.DataTypes;
//const sequelize = new Sequelize('sqlite::memory');
const sequelize = require('../config/config');


class Item extends Model {}

Item.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull : false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0
  },
  
  description: {
    type: DataTypes.TEXT,
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'item' // We need to choose the model name
});

// the defined model is the class itself
console.log(Item === sequelize.models.Item); // true

module.exports = Item;

//----------------------------

// - [ ] name
// - [ ] price - (make sure it is an integer) 
//- [ ] description - large text
// - [ ] imageUrl = with a default value