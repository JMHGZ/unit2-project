var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    text: String
  }, {
    timestamps: true
  });

var memberSchema = new mongoose.Schema({
    name: String,
    date: Date,
    posts: [postSchema],
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Member', memberSchema);

