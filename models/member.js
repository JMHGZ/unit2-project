var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    text: String
  }, {
    timestamps: true
  });

var memberSchema = new mongoose.Schema({
    name: String,
    email: String,
    cohort: String,
    avatar: String,
    posts: [postSchema],
    googleId: String
  }, {
    timestamps: true
  });