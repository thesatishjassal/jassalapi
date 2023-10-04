// src/controllers/contactController.js
const Blog = require("../models/blogModel");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      res.status(404).json({ message: "Blog not found" });
    } else {
      res.json(blog);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    const { title, category, description, dateTime, featuredImage, Author } =
      req.body;
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};

// Define a route for deleting an item by ID
exports.editBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const updatedBlogData = req.body; // Assuming you send the updated data in the request body
    const blog = await Blog.findById(blogId);
    if (!blog) {
      res.status(404).json({ message: "Blog not found" });
    } else {
      // Delete the item
      await Blog.findByIdAndUpdate(blogId, updatedBlogData);
      res.json({ message: "Blog Updated successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Define a route for deleting an item by ID
exports.deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      res.status(404).json({ message: "Blog not found" });
    } else {
      // Delete the item
      await Blog.findByIdAndDelete(blogId);
      res.json({ message: "Blog deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
