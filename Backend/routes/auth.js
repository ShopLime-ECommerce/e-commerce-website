const router = require('express').Router();
const User = require('../models/user');
const passport = require('../midllwares/authentication');


router.post('/sign-up', (req, res) => {
//   console.log("POST body: ", req.body);
  let {id, name, imageUrl,email,password} = req.body;
  User.create({
      id: id,
     name: name, 
     imageUrl: imageUrl,
     email: email,
     password: password
    })
    .then((user) => {
      req.login(user, () => res.status(201).json(user));
    })
    .catch((err) => {
      res.status(400).json({ msg: 'Failed Signup', err });
    });
});

router.post('/sign-in',
  passport.authenticate('local'), 
  (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.json(req.user);
  });

router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
})

module.exports = router;