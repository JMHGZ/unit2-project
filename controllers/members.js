const Member = require('../models/member');

module.exports = {
  index,
  addPost,
  delPost
};

function index(req, res, next) {
  console.log(req.query)
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  Member.find(modelQuery)
  .sort(sortKey).exec(function(err, members) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('members/index', {
      members,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}

function addPost(req, res, next) {
  req.user.facts.push(req.body);
  req.user.save(function(err) {
    if (err) return next(err);
    res.redirect('/memberss');
  });
}

function delPost(req, res, next) {

}