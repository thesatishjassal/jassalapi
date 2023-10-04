// src/routes/servicesRoutes.js
const express = require("express");
const servicesController = require("../controllers/servicesController");

const router = express.Router();

router.get("/", servicesController.getAllServices);
router.get("/:id", servicesController.getServiceById);
router.post("/", servicesController.createService);
router.delete("/:id", servicesController.deleteService);
router.put("/:id", servicesController.editService);

module.exports = router;
