const router = require('express').Router()
const User = require('../db/models/User')

router.get('/', (req, res, next) => {
	try {
		const users = User.findAll({ identity: ['name', 'address', 'email'] })
		res.send(users)
	} catch (error) {
		next(error)
	}
})

module.exports = router
