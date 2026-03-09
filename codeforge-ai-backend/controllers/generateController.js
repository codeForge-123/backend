const Project = require("../models/Project");
const buildProject = require("../services/projectBuilder");
const zipProject = require("../services/zipServices");
const path = require("path");
const { createZip } = require("../services/zipServices");

exports.generateProject = async (req, res) => {
  try {
    const { title, stack, level } = req.body;

    // Save to DB
    const newProject = new Project({
      title,
      stack,
      level,
    });

    await newProject.save();

    // Build project folder
    const projectPath = await buildProject(title, stack);

    // Zip project
    const zipPath = await zipProject(projectPath);

    res.download(zipPath);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Project generation failed" });
  }
};
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch projects" });
  }
};

exports.downloadProject = async (req, res) => {
  try {

    const projectName = req.params.name;

    const projectPath = path.join(__dirname, "..", projectName);

    const zipPath = path.join(__dirname, "..", `${projectName}.zip`);

    await createZip(projectPath, zipPath);

    res.download(zipPath);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Download failed"
    });

  }
};
      