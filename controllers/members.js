const Member = require('../models/member');

module.exports = {
  index,
  addPost,
  delPost
};

function index(req, res, next) {
  console.log(req.query)
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  let sortKey = req.query.sort || 'name';
  Member.find(modelQuery)
  .sort(sortKey).exec(function(err, members) {
    if (err) return next(err);
    res.render('members/index', {
      members,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}

function addPost(req, res, next) {
  req.user.posts.push(req.body);
  req.user.save(function(err) {
    if (err) return next(err);
    res.redirect('/members');
  });
}

function delPost(req, res) {
  Member.findById(req.user.id, (err, user) => {
    console.log(user)
    console.log(req.params.id)

    user.posts.remove(req.params.id)
    user.save(()=>{
      res.redirect("/members");
    })
  });
}