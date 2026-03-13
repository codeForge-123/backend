const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  domain: String,
  technology: String,
  structure: Object,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Project", projectSchema);
