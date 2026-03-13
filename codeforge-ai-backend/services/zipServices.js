const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

exports.zipProject = (projectName) => {

  return new Promise((resolve, reject) => {

    const projectPath = path.join(__dirname, "..", "generated", projectName);
    const zipPath = path.join(__dirname, "..", "generated", `${projectName}.zip`);

    const output = fs.createWriteStream(zipPath);
    const archive = archiver("zip", { zlib: { level: 9 } });

    output.on("close", () => resolve(zipPath));
    archive.on("error", err => reject(err));

    archive.pipe(output);
    archive.directory(projectPath, false);
    archive.finalize();

  });

};