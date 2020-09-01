const express = require('express')
const app = express()
const path = require('path')
const db = require('./db/database')

app.use('/api', require('./api'))

app.get('*', (req, res, next) => {
	res.send(path.join(__dirname, '..', 'public'))
})

db.sync({ force: true })
	.then(() => console.log('Succesfully synced the database'))
	.catch((error) => console.log('Something went wrong: ', error))

app.listen(8080, () => console.log('Listening on port 8080'))

module.exports = app
