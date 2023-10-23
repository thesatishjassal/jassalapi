// src/controllers/componentController.js
const Component = require("../models/componentModel");

exports.getAllComponent = async (req, res) => {
  try {
    const component = await Component.find();
    res.json(component);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getComponentById = async (req, res) => {
  try {
    const component = await Component.findById(req.params.id);
    if (!component) {
      res.status(404).json({ message: "Blog not found" });
    } else {
      res.json(component);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// exports.createComponent = async (req, res) => {
//   try {
//     const newComponent = await Component.create(req.body);
//     return res.status(201).json(newComponent);
//   } catch (error) {
//     console.error(error);
//     return res.status(400).json({ error: error.message });
//   }
// };

exports.createComponent = async (req, res) => {
  try {
    const newComponent = await Component.create(req.body);
    return res.status(201).json(newComponent);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
};

// Define a route for deleting an item by ID
exports.editComponent = async (req, res) => {
  try {
    const componentId = req.params.id;
    const updatedComponent = req.body; // Assuming you send the updated data in the request body
    const component = await Component.findById(componentId);
    if (!component) {
      res.status(404).json({ message: "Component not found" });
    } else {
      // Delete the item
      await Component.findByIdAndUpdate(componentId, updatedComponent);
      res.json({ message: "Component Updated successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Define a route for deleting an item by ID
exports.deleteComponent = async (req, res) => {
  try {
    const componentId = req.params.id;
    const component = await Component.findById(componentId);
    if (!component) {
      res.status(404).json({ message: "Component not found" });
    } else {
      // Delete the item
      await Component.findByIdAndDelete(componentId);
      res.json({ message: "Component deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
