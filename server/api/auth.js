const router = require('express').Router()
const User = require('../models/user')


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

// import express from 'express';
// import User from '../models/userModel';
// import { getToken, isAuth } from '../util';

// const router = express.Router();

// router.put('/:id', isAuth, async (req, res) => {
//   const userId = req.params.id;
//   const user = await User.findById(userId);
//   if (user) {
//     user.name = req.body.name || user.name;
//     user.email = req.body.email || user.email;
//     user.password = req.body.password || user.password;
//     const updatedUser = await user.save();
//     res.send({
//       _id: updatedUser.id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//       isAdmin: updatedUser.isAdmin,
//       token: getToken(updatedUser),
//     });
//   } else {
//     res.status(404).send({ message: 'User Not Found' });
//   }
// });

// router.post('/signin', async (req, res) => {
//   const signinUser = await User.findOne({
//     email: req.body.email,
//     password: req.body.password,
//   });
//   if (signinUser) {
//     res.send({
//       _id: signinUser.id,
//       name: signinUser.name,
//       email: signinUser.email,
//       isAdmin: signinUser.isAdmin,
//       token: getToken(signinUser),
//     });
//   } else {
//     res.status(401).send({ message: 'Invalid Email or Password.' });
//   }
// });

// router.post('/register', async (req, res) => {
//   const user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//   });
//   const newUser = await user.save();
//   if (newUser) {
//     res.send({
//       _id: newUser.id,
//       name: newUser.name,
//       email: newUser.email,
//       isAdmin: newUser.isAdmin,
//       token: getToken(newUser),
//     });
//   } else {
//     res.status(401).send({ message: 'Invalid User Data.' });
//   }
// });

// router.get('/createadmin', async (req, res) => {
//   try {
//     const user = new User({
//       name: 'Basir',
//       email: 'admin@example.com',
//       password: '1234',
//       isAdmin: true,
//     });
//     const newUser = await user.save();
//     res.send(newUser);
//   } catch (error) {
//     res.send({ message: error.message });
//   }
// });

// export default router;
