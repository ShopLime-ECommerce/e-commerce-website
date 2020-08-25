const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/', (req, res, next) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app
