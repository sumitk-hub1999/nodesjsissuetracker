var issuedb = require("../models/issuemodel");
//creae and save new project
exports.create = (req, res) => {
  if (!req.body || req.body === undefined) {
    res.status(400).send({ message: "content cannot be empty" });
    return;
  } //post request, all data of form stored in body of request object

  //new project
  console.log(req.body);

  const issue = new issuedb({
    issue: req.body.issue,
    author: req.body.author,
    description: req.body.description,
    label: req.body.label,
    status: req.body.status,
  });

  //savve
  issue
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
};

//retrieve and return all projects also single project
exports.find = (req, res) => {
  issuedb
    .find() //returns all the records of the db
    .then((issue) => {
      res.send(issue);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "error" });
    });
};
//update a new project by project id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "data to update cannot be empty" });
  }
  const id = req.params.id;
  issuedb
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
  issuedb
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `cannot delete ${id}` });
      } else {
        res.send({
          message: "issue was deleted successfully",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "couldnt delete id" + id,
      });
      console.log(err);
    });
};
