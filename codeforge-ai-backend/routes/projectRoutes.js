const express = require("express");
const router = express.Router();

//const { downloadProject } = require("../controllers/generateController");

const projectController = require("../controllers/projectController");

// generate project
router.post("/generate", projectController.generateProject);

// get all projects
router.get("/projects", projectController.getAllProjects);

// download project
//router.get("/download/:name", downloadProject);

module.exports = router;
const path = require("path");

router.get("/download/:name", (req, res) => {

  const projectName = req.params.name;

  const zipPath = path.join(__dirname, "..", "generated", `${projectName}.zip`);

  res.download(zipPath);

});