const router = require('express').Router()
const User = require('../db/User')

router.get('/', (req, res, next) => {
    try {
        const user = User.findAll({
            identity: ['name', 'address', 'email']
        })
		res.send(user)
    } catch (error) {
        next(error)
    }
})

module.exports = router;