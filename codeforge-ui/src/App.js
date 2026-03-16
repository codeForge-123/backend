import React, { useState } from "react";
import axios from "axios";
import Courses from "./Courses";

function App() {

  const [prompt, setPrompt] = useState("");
  const [projectName, setProjectName] = useState("");
  const [loading, setLoading] = useState(false);

  const generateProject = async () => {

    if (!prompt) {
      alert("Please enter a project description");
      return;
    }

    try {

      setLoading(true);

      const response = await axios.post(
        "http://localhost:8082/api/projects/generate",
        {
          prompt: prompt
        }
      );

      alert(response.data);

      // Match backend naming logic
      const name = prompt
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "_")
        .replace(/_+/g, "_");

      setProjectName(name);

    } catch (error) {

      console.error(error);
      alert("Backend connection failed. Make sure Spring Boot is running.");

    } finally {

      setLoading(false);

    }
  };

  const downloadProject = () => {

    if (!projectName) {
      alert("Generate a project first!");
      return;
    }

    window.open(
      "http://localhost:8082/projects/download/" + projectName,
      "_blank"
    );
  };

  return (

    <div style={{ padding: "40px", fontFamily: "Arial" }}>

      <h1>CodeForgeAI</h1>

      {/* PROJECT GENERATOR */}

      <h2>AI Project Generator</h2>

      <textarea
        rows="4"
        cols="50"
        placeholder="Describe your project..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <br /><br />

      <button onClick={generateProject} disabled={loading}>
        {loading ? "Generating..." : "Generate Project"}
      </button>

      <br /><br />

      <button onClick={downloadProject}>
        Download Project
      </button>

      <hr style={{ margin: "40px 0" }} />

      {/* LEARNING SECTION */}

      <h2>Learning Courses</h2>

      <Courses />

    </div>
  );
}

export default App;