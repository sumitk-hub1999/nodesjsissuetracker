const mongoose = require("mongoose");

var issueSchema = new mongoose.Schema({
  issue: {
    type: String,
  },
  author: {
    type: String,
  },
  description: {
    type: String,
  },
  label: String,
  status: String,
});

const issuedb = mongoose.model("issuedb", issueSchema);

module.exports = issuedb;
//model created!!, create controller
