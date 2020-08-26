const router = require('express').Router()
const Item = require('../db/models/Item')

router.get('/', (req, res) => {
	try {
		const items = Item.findAll()
		console.log(items)
	} catch (error) {
		next(error)
	}
})

router.get('/:id', (req, res) => {
	try {
	} catch (error) {
		next(error)
	}
})

module.exports = router
