"use client";

import { useEffect, useState } from "react";

export default function HistoryPage() {

  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => {
        console.log("Projects:", data);   // debug
        setProjects(data);
      });

  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Generated Projects History</h1>

      {projects.length === 0 ? (
        <p>No projects found</p>
      ) : (
        projects.map((project) => (
          <div
            key={project._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>{project.structure?.name || "Project"}</h3>

            <p><b>Domain:</b> {project.domain}</p>
            <p><b>Technology:</b> {project.technology}</p>
            <p><b>Date:</b> {new Date(project.createdAt).toLocaleString()}</p>

            <button
              onClick={() =>
                window.open(`http://localhost:5000/api/download/test-project`)
              }
              style={{
                padding: "8px 12px",
                background: "blue",
                color: "white",
                border: "none",
                borderRadius: "5px",
                marginTop: "10px"
              }}
            >
              Download Project
            </button>

          </div>
        ))
      )}

    </div>
  );
}