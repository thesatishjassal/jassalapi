// src/routes/componentRoutes.js
const express = require('express');
const componentController = require('../controllers/componentController');

const router = express.Router();

router.get('/', componentController.getAllComponent);
router.get('/:id', componentController.getComponentById);
router.post('/', componentController.createComponent);
router.delete('/:id', componentController.deleteComponent);
router.put('/:id', componentController.editComponent);

module.exports = router;