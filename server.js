//allows us to start the server
//creating http server
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express(); //app initialised as express app

dotenv.config({ path: "config.env" }); //collabarative env we use dotenv
const port = process.env.port || 8080; //searching in dotenv file
//log request
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("Crud Application");
}); //route
app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
