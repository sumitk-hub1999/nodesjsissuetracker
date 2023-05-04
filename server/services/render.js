//for maintaing callback functions, allows us to render different files
exports.homeRoutes = (req, res) => {
  res.render("index");
};

exports.add_project = (req, res) => {
  res.render("add_project");
};

exports.all_issues = (req, res) => {
  res.render("all_issues");
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
