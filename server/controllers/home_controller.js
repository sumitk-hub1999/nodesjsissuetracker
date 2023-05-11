const Project = require("../models/model");
module.exports.home = async function (req, res) {
  try {
    let projects = await Project.find({}).sort("-createdAt");
    return res.render("index", {
      title: "Issue/Bug Tracker | Home",
      projects,
    });
  } catch (err) {
    console.log("Error", err);
    return;
  }
};
