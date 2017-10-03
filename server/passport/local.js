const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const bcrypt = require('bcrypt');
const passport = require('passport');

passport.use(new LocalStrategy((username, password, next) => {
  User.findOne({ username })
  .then(user =>{
    if (!user)
      return next(null, false, { message: 'Incorrect username' });

    if (!bcrypt.compareSync(password, user.password))
      return next(null, false, { message: 'Incorrect password' });

    next(null, user);
  })
  .catch(e => next(e));
}));
