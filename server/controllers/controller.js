var userdb = require("../models/model");
var issuedb = require("../models/issuemodel");
var bodyParser = require("body-parser");
//creae and save new project
exports.create = (req, res) => {
  console.log(req.body);
  if (!req.body || req.body === undefined) {
    res.status(400).send({ message: "content cannot be empty" });
    return;
  } //post request, all data of form stored in body of request object

  //new project
  console.log(req.body);

  const project = new userdb({
    name: req.body.name,
    description: req.body.description,
    author: req.body.author,
  });

  //savve
  project
    .save(project)
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occured",
      });
    });
};

//retrieve and return all projects also single project
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    userdb
      .findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "not found id" + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error retrieving user with id" + id });
      });
  } else {
    userdb
      .find() //returns all the records of the db
      .then((project) => {
        res.send(project);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "error" });
      });
  }
};
module.exports.createIssue = async function (req, res) {
  try {
    let project = await userdb.findById(req.query.id);
    console.log(project);
    if (project) {
      const issue = new issuedb({
        issue: req.body.issue,
        author: req.body.author,
        description: req.body.description,
        label: req.body.label,
        status: req.body.status,
      });

      project.issues.push(issue);

      issuedb
        .save(issue)
        .then((data) => {
          res.send(data);
          console.log(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "some error occured",
          });
        });

      if (!(typeof req.body.labels === "string")) {
        for (let label of req.body.labels) {
          let isPresent = project.labels.find((obj) => obj == label);
          if (!isPresent) {
            project.labels.push(label);
          }
        }
      } else {
        let isPresent = project.labels.find((obj) => obj == req.body.labels);
        if (!isPresent) {
          project.labels.push(req.body.labels);
        }
      }

      await userdb
        .save(project)
        .then((data) => {
          res.send(data);
          console.log(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "some error occured",
          });
        });
      return res.redirect(`back`);
    } else {
      return res.redirect("back");
    }
  } catch (err) {
    console.log(err);
    return res.redirect("back");
  }
};
//find issue
exports.findIssue = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    issuedb
      .findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "not found id" + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error retrieving user with id" + id });
      });
  } else {
    issuedb
      .find() //returns all the records of the db
      .then((issue) => {
        res.send(issue);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "error" });
      });
  }
};
//update a new project by project id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "data to update cannot be empty" });
  }
  const id = req.params.id;
  userdb
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `cannout update project with ${id}` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err + "error in updation" });
    });
};

//Delete a user with specified user id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  userdb
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `cannot delete ${id}` });
      } else {
        res.send({
          message: "project was deleted successfully",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "couldnt delete id" + id,
      });
    });
};
