const router = require('express').Router()
const { User } = require('../db/models')

router.get('/', (req, res, next) => {
	User.findAll({
		attributes: ['id', 'email'],
	})
		.then((users) => res.json(users))
		.catch(next)
})

module.exports = router
