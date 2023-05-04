const mongoose = require("mongoose");

var issueSchema = new mongoose.Schema({
  Issue: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  label: String,
  status: String,
});

const issuedb = mongoose.model("issuedb");

module.exports = issuedb;
//model created!!, create controller
