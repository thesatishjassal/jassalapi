// src/routes/blogRoutes.js
const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getBlogById);
router.post('/', blogController.createBlog);
router.delete('/:id', blogController.deleteBlog);
router.put('/:id', blogController.editBlog);

module.exports = router;