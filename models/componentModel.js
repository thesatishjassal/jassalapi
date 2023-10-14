// src/models/componentsModel.js
const mongoose = require("mongoose");

const componentSchema = new mongoose.Schema({
  title: String,
  description: String,
  additions: String,
  category: String,
  tags: [String],
  filetype: [String],
  thumbnail: {
    data: Buffer,
    contentType: String,
  },
  youtubelink: String,
  donwloadlink: String,
});

const Component = mongoose.model("Component", componentSchema);

module.exports = Component;
