// src/models/blogModel.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    category: String,
    featuredImage: Buffer,
    description: String,
    dateTime: String,
    Author: String
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
