//for maintaing callback functions, allows us to render different files
const axios = require("axios");
exports.homeRoutes = (req, res) => {
  //get request to /api/projects
  axios
    .get("http://localhost:3000/api/projects")
    .then(function (response) {
      //console.log(response);
      res.render("index", { projects: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_project = (req, res) => {
  res.render("add_project");
};

exports.all_issues = (req, res) => {
  axios
    .get("http://localhost:3000/api/projects/id")
    .then(function (response) {
      //console.log(response);
      res.render("all_issues", { issues: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
  //res.render("all_issues");
};

exports.add_issue = (req, res) => {
  res.render("add_issue");
};

exports.update_project = (req, res) => {
  res.render("update_project");
};

exports.update_issue = (req, res) => {
  res.render("update_issue");
};
