// src/routes/contactRoutes.js
const express = require("express");
const PropsoalController = require("../controllers/requestPropsoal");

const router = express.Router();

router.get("/", PropsoalController.getAllPropsoals);
router.get("/:id", PropsoalController.getPropsoalById);
router.post("/", PropsoalController.createPropsoal);

module.exports = router;
