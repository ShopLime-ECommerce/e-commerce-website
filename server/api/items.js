const router = require('express').Router()
const Items = require('../db/Items')

router.get('/', (req, res) => {
	try {
		const items = Items.findAll()
		console.log(items)
	} catch (error) {
		next(error)
	}
})

module.exports = router
