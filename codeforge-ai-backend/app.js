require("dotenv").config();
const express = require("express");
const cors = require("cors");

const projectRoutes = require("./routes/projectRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 CodeForge AI Backend Running");
});

app.use("/api/project", projectRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
