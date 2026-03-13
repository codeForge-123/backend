"use client";

import { useState } from "react";

export default function BuildPage() {
  const [domain, setDomain] = useState("");
  const [technology, setTechnology] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

 const handleGenerate = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ domain, technology }),
      }
    );

    const data = await response.json();
    setResult(JSON.stringify(data, null, 2));

  } catch (error) {
    console.error(error);
    setResult("Server error.");
  }
};




  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>🚀 Build Your Project</h1>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter Domain (Ex: Healthcare)"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          style={{ padding: "10px", width: "300px", marginRight: "10px" }}
        />

        <input
          type="text"
          placeholder="Enter Technology (Ex: MERN)"
          value={technology}
          onChange={(e) => setTechnology(e.target.value)}
          style={{ padding: "10px", width: "300px" }}
        />
      </div>

      <button
        onClick={handleGenerate}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {loading ? "Generating..." : "Generate Project"}
      </button>

      {result && (
        <pre
          style={{
            marginTop: "30px",
            background: "#f4f4f4",
            padding: "20px",
            borderRadius: "5px",
            overflowX: "auto",
          }}
        >
          {result}
        </pre>
      )}
    </div>
  );
}
