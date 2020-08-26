const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const database = require('./db/database')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// API routes defined for users and items
app.use('/api', require('./api'))

// Static middleware to serve files from the public folder
app.use(express.static(path.join(__dirname, '..', 'public')))

const PORT = 8080

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

// Error handling function
app.use((err, req, res, next) => {
	res.status(err.status || 500).send(err.message || 'Internal server error.')
})

const init = async () => {
	try {
		await database.sync()
		app.listen(PORT, () => {
			console.log(`Listening on ${PORT}`)
		})
	} catch (error) {
		console.log(`Error occured while setting up server: ${error}`)
	}
}

init()

module.exports = app
