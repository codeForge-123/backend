const { zipProject } = require("../services/zipServices");
const Project = require("../models/Project");
const { generateProjectFiles } = require("../services/projectGenerator");

// Generate Project
exports.generateProject = async (req, res) => {
  try {

    const { domain, technology } = req.body;

    const projectName = generateProjectFiles(domain, technology);

    // CREATE ZIP
    await zipProject(projectName);

    const newProject = new Project({
      domain,
      technology,
      structure: { name: projectName }
    });

    await newProject.save();

    res.json({
      message: "Project generated successfully",
      download: `/api/download/${projectName}`
    });

  } catch (error) {
    console.error("Generate Project Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};


// Get All Projects (History)
exports.getAllProjects = async (req, res) => {
  try {

    const projects = await Project.find().sort({ createdAt: -1 });

    res.json(projects);

  } catch (error) {
    console.error("Fetch Projects Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};