// src/models/componentsModel.js
const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  name: String
});

const filetypeSchema = new mongoose.Schema({
  name: String
});

const componentSchema = new mongoose.Schema({
  title: String,
  description: String,
  additions: String,
  category: String,
  tags: [tagSchema],
  filetype: [filetypeSchema],
  thumbnail: String,
  youtubelink: String,
  downloadlink: String,
  filename: String,
});

const Component = mongoose.model("Component", componentSchema);

module.exports = Component;
