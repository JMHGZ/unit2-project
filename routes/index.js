var express = require('express');
var router = express.Router();

var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bitter \'Bout Litter' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/members',
    failureRedirect : '/members'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/members');
});

module.exports = router;
