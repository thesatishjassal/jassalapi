// src/models/servicesModel.js
const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: String,
  logo: Buffer,
});

const Services = mongoose.model("Services", servicesSchema);

module.exports = Services;
