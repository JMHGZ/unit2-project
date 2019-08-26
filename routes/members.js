var router = require('express').Router();
var membersCtrl = require('../controllers/members');

/* GET users listing. */
router.get('/members', membersCtrl.index);

router.post('/posts', isLoggedIn, membersCtrl.addPost);

router.delete('/posts/:id', isLoggedIn, membersCtrl.delPost);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;
