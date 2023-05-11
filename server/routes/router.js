const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require("../controllers/controller");
const homeController = require("../controllers/home_controller");
/**
 * @description Root Route
 * @method GET /
 */
route.get("/", services.homeRoutes);
/**
 * @description add project
 * @method GET /add-project
 */

route.get("/add-project", services.add_project); //route
/**
 * @description all issues
 * @method GET /all-issues
 */
route.get("/all-issues", services.all_issues); //route
/**
 * @description add issue
 * @method GET /add-issue
 */
route.get("/add-issue", services.add_issue); //route
/**
 * @description update project
 * @method GET /update-project
 */
route.get("/update-project", services.update_project); //route
/**
 * @description update issue
 * @method GET /update-issue
 */
route.get("/update-issue", services.update_issue); //route
//API
//route path of post request
route.post("/api/projects", controller.create);
route.get("/api/projects", controller.find);
route.put("/api/projects/:id", controller.update);
route.delete("/api/projects/:id", controller.delete);
//issues
route.post("/api/projects/:id", controller.createIssue);
route.get("/api/projects/:id", controller.findIssue);
// route.put("/api/issues/:id", issueController.update);
// route.delete("/api/issues/:id", issueController.delete);
module.exports = route;
