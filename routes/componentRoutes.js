const mongoose = require('mongoose');

// Define a schema for the UIComponent collection
const uiComponent = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  technologies: String,
  coverImage: String,
  thumbnail: String,
  demoLink: String,
  packages: [
    {
      id: String, // If you want to keep "id" inside the "packages" array
      icon: String,
    },  
  ],
  tags: [
    {
      id: String, // If you want to keep "id" inside the "tags" array
      name: String,
    },
  ],
  checked: Boolean,
  blogLink: String,
  fileType: [String], // FileType as an array
  features: String,
  basedOn: [
    {
      id: String,
      icon: String,
    },
  ],
  youtubeLink: String,
  downloadFileLink: String,
});

// Create a UIComponent model based on the schema
const UIComponent = mongoose.model('UIComponent', uiComponent);

module.exports = UIComponent;
