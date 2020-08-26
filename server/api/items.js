const router = require('express').Router()
const Item = require('../db/models/Item')

router.get('/', (req, res, next) => {
	try {
		const items = Item.findAll()
		res.send(items)
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
