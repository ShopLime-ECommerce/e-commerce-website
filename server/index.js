const express = require('express')
const app = require('express')()
const database = require('./db/database')
const bodyParser = require('body-parser')
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', require('./api'))

database
	.authenticate()
	.then(() => {
		return console.log('Connection has been established successfully.')
	})
	.catch((error) => {
		return console.error('Unable to connect to the database:', error)
	})

database.sync({ forced: true })
app.get('/', (req, res) => {
	res.send('The server is working! ')
})

app.listen(process.env.PORT, () => {
	console.log(`Server started on port: ${process.env.PORT}`)
})
