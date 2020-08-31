const router = require('express').Router()

router.use('/items', require('./items'))
router.use('/orders', require('./order'))
router.use('/reviews', require('./reviews'))
router.use('/search', require('./search'))
router.use('/cart', require('./cart'))

router.use((req, res, next) => {
	const error = new Error('Not Found')
	error.status = 404
	next(error)
})

module.exports = router
