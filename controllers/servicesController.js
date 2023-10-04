// src/controllers/servicesController.js
const Services = require("../models/servicesModel");

exports.getAllServices = async (req, res) => {
  try {
    const services = await Services.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getServiceById = async (req, res) => {
  try {
    const service = await Services.findById(req.params.id);
    if (!service) {
      res.status(404).json({ message: "Service not found" });
    } else {
      res.json(service);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createService = async (req, res) => {
  try {
    const { title, description, duration, logo } = req.body;
    const newService = await Services.create(req.body);
    res.status(201).json(newService);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};

// Define a route for deleting an item by ID
exports.editService = async (req, res) => {
  try {
    const updatedServiceData = req.body; // Assuming you send the updated data in the request body
    const serviceId = req.params.id;
    const service = await Services.findById(serviceId);
    if (!service) {
      res.status(404).json({ message: "Service not found" });
    } else {
      // Delete the Service
      await Services.findByIdAndUpdate(serviceId, updatedServiceData);
      res.json({ message: "Service Updated successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Define a route for deleting an service by ID
exports.deleteService = async (req, res) => {
  try {
    const serviceId = req.params.id;
    const service = await Services.findById(serviceId);
    if (!service) {
      res.status(404).json({ message: "Service not found" });
    } else {
      // Delete the service
      await Services.findByIdAndDelete(serviceId);
      res.json({ message: "Service deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
