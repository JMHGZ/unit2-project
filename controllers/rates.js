var Member = require('../models/member');

module.exports = {
  rate
};

function rate(req, res, next) {
    Member.findById(req.params.id, function (err, member) {
      member.rate.push(req.body);
      member.save(function(err) {
        if (err) return next(err);
        res.redirect('/members');
      });
    });
  }