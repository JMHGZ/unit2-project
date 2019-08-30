var router = require('express').Router();
var membersCtrl = require('../controllers/members');

/* GET users listing. */
router.get('/members', membersCtrl.index);

router.post('/posts', isLoggedIn, membersCtrl.addPost);


router.delete('/members/:id', isLoggedIn, membersCtrl.delPost);

module.exports = router;





function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}