const { Sequelize, DataTypes, Model } = require('sequelize');
//const sequelize = new Sequelize('sqlite::memory');
const sequelize = require('../config/config');


class User extends Model {}

User.init({
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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate:{
        isEmail : true,
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull : false,
    validate:{
        isLongEnough: (val) =>{
            if(val.length < 7){
                throw new Error( " Password has to be longer than 6 characters")
            }
        }
    }
  },
  address: {
    type: DataTypes.STRING,
    allowNull : false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'user' // We need to choose the model name
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true
module.exports = User;



//----------------------------
// - [ ] name - not empty or null
// - [ ] imageUrl - with a default value 
// -  address - not empty or null
// - [ ] email - not empty or null
// - [ ] password - not empty or null