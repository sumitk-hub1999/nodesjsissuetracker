//allows us to start the server
//creating http server
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express(); //app initialised as express app
const path = require("path");

dotenv.config({ path: "config.env" }); //collabarative env we use dotenv
const port = process.env.port || 8080; //searching in dotenv file
//log request
app.use(morgan("tiny"));
//pass request to body-parser
app.use(bodyParser.urlencoded({ extended: true }));
//set view engine
app.set("view engine", "ejs");
//set views folder where ejs files stored
//app.set("views", path.resolve(__dirname,""));
//load assets using middleware metho d use
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/images", express.static(path.resolve(__dirname, "assets/images")));
app.use("/script", express.static(path.resolve(__dirname, "assets/script")));
app.get("/", (req, res) => {
  res.render("index");
}); //route

app.get("/add-project", (req, res) => {
  res.render("add_project");
}); //route

app.get("/all-issues", (req, res) => {
  res.render("all_issues");
}); //route

app.get("/add-issue", (req, res) => {
  res.render("add_issue");
}); //route
app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
