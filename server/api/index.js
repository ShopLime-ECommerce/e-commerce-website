const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/items', require('./items'))

router.use((req, res, next) => {
	const error = new Error('Not found')
	error.status = 404
	next(error)
})

module.exports = router
