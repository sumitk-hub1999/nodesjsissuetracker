const mongoose = require("mongoose");
var schema = new mongoose.Schema(
  {
    name: String,
    // required: true,

    description: String,

    author: String,
    //required: true,
    issues: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "issuedb",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const userdb = mongoose.model("userdb", schema);

module.exports = userdb;

//model created!!, create controller
