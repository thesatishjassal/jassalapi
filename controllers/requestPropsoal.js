// src/controllers/contactController.js
const Propsoals = require("../models/PropsalsModel");

exports.getAllPropsoals = async (req, res) => {
  try {
    const propsoal = await Propsoals.find();
    res.json(propsoal);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getPropsoalById = async (req, res) => {
  try {
    const propsoal = await Propsoals.findById(req.params.id);
    if (!propsoal) {
      res.status(404).json({ message: "Propsoal not found" });
    } else {
      res.json(propsoal);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createPropsoal = async (req, res) => {
  try {
    const newPropsoal = await Propsoals.create(req.body);
    res.status(201).json(newPropsoal);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};
