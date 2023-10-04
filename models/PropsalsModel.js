// src/models/RequestPropsoal.js
const mongoose = require("mongoose");

const propsoalSchema = new mongoose.Schema({
  name: String,
  email: String,
  project_type: String,
  budget: String,
  description: String,
});

const RequestPropsoal = mongoose.model("Propsoals", propsoalSchema);

module.exports = RequestPropsoal;
