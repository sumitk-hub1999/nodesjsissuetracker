var userdb = require("../models/model");
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
  userdb
    .find() //returns all the records of the db
    .then((project) => {
      res.send(project);
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
