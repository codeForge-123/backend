import React, { useState } from "react";
import axios from "axios";

function App() {

  const [prompt, setPrompt] = useState("");
  const [projectName, setProjectName] = useState("");

  const generateProject = async () => {

    const response = await axios.post(
      "http://localhost:8082/projects/generate",
      { prompt: prompt }
    );

    alert(response.data);

    const name = prompt.replaceAll(" ", "_");
    setProjectName(name);
  };

  const downloadProject = () => {

    window.open(
      "http://localhost:8082/projects/download/" + projectName
    );

  };

  return (
    <div style={{padding:"40px"}}>

      <h1>CodeForgeAI</h1>

      <textarea
        rows="4"
        cols="50"
        placeholder="Describe your project..."
        onChange={(e)=>setPrompt(e.target.value)}
      />

      <br/><br/>

      <button onClick={generateProject}>
        Generate Project
      </button>

      <br/><br/>

      <button onClick={downloadProject}>
        Download Project
      </button>

    </div>
  );
}

export default App;