const express = require('express');
const passport = require('passport');
const path = require('path');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);

var authRoutes = express.Router();

/* GET home page. */
authRoutes.post('/signup', (req, res, next) => {
  const {username, password} = req.body;

  if (!username || !password)
    return res.status(400).json({ message: 'Provide username and password' });

  debug('Find user in DB');

  User.findOne({ username },'_id').exec().then(user =>{
    if(user)
      return res.status(400).json({ message: 'The username already exists' });

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);
    debug('creating user');
    const theUser = new User({
      username,
      password: hashPass
    });
    return theUser.save()
    .then(user =>{
      req.login(user, (err) => {
        if (err)
          return res.status(500).json({ message: 'Something went wrong' });

        res.status(200).json(req.user);
      });
    })
  })
  .catch(e => {
    console.log(e);
    res.status(400).json({ message: 'Something went wrong' })
  });
});

authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err)
      return res.status(500).json({ message: 'Something went wrong' });

    if (!user)
      return res.status(401).json(failureDetails);

    req.login(user, (err) => {
      if (err)
        return res.status(500).json({ message: 'Something went wrong' });

      // We are now logged in (notice req.user)
      res.status(200).json(req.user);
    });
  })(req, res, next);
});

authRoutes.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Success' });
});

authRoutes.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated())
    return res.status(200).json(req.user);
  res.status(403).json({ message: 'Unauthorized' });
});


module.exports = authRoutes;
