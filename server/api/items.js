const router = require('express').Router()
const Items = require('../db/models/Items')

router.get('/', (req, res, next) => {
	try {
		const items = Items.findAll()
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


