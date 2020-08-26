const router = require('express').Router()
const User = require('../db/models/user')
const passport = require('../authentication')

router.post('/sign-up', (req, res) => {
	let { id, name, imageUrl, email, password } = req.body
	User.create({
		id: id,
		name: name,
		imageUrl: imageUrl,
		email: email,
		password: password,
	})
		.then((user) => {
			req.login(user, () => res.status(201).json(user))
		})
		.catch((err) => {
			res.status(400).json({ msg: 'Failed Signup', err })
		})
})

router.post('/sign-in', passport.authenticate('local'), (req, res) => {
	res.json(req.user)
})
router.post('/logout', (req, res) => {
	req.logout()
	res.status(200).json({ message: 'Logout successful' })
})

module.exports = router
