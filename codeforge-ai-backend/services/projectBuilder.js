const fs = require("fs");
const path = require("path");

const buildMERNProject = (projectName) => {
  const basePath = path.join(__dirname, "../generated", projectName);

  const frontendPath = path.join(basePath, "frontend/src");
  const backendPath = path.join(basePath, "backend");

  fs.mkdirSync(frontendPath, { recursive: true });
  fs.mkdirSync(backendPath, { recursive: true });

  // App.js
  fs.writeFileSync(
    path.join(frontendPath, "App.js"),
    `
import React from "react";

function App() {
  return <h1>${projectName} - MERN Project</h1>;
}

export default App;
`
  );

  // index.js
  fs.writeFileSync(
    path.join(frontendPath, "index.js"),
    `
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
`
  );

  // server.js
  fs.writeFileSync(
    path.join(backendPath, "server.js"),
    `
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
`
  );

  return basePath;
};

module.exports = buildMERNProject;
