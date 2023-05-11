const mongoose = require("mongoose");

var issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    labels: [
      {
        type: String,
        trim: true,
        required: true,
      },
    ],
    status: [
      {
        type: String,
        trim: true,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const issuedb = mongoose.model("issuedb", issueSchema);

module.exports = issuedb;
//model created!!, create controller
