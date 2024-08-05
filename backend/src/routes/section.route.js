const express = require("express");
const sectionController = require("../controllers/section.controller");

const sectionRouter = express.Router();

// Routes
sectionRouter.route("/").get(sectionController.fetchAllSections);


module.exports = sectionRouter;