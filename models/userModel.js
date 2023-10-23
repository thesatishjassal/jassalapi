// src/models/userModel.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  profession: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
