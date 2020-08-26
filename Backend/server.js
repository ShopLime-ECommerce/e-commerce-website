const express = require("express");
const app = express();
const morgan = require("morgan");
const database = require('./config/config');
const bodyParser = require("body-parser");
require('dotenv').config();
const port = process.env.PORT;

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

database.authenticate()
.then(()=>{
  return console.log('Connection has been established successfully.')
})
.catch( (error)=> {
  return console.error('Unable to connect to the database:', error)
 });
database.sync();


  //the routes
app.get("/", (req, res) => {
      res.send("The server is working! ")
  });
app.use("/items",require('./routes/item'));
app.use("/orders",require('./routes/order'));

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
