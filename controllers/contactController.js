// src/controllers/contactController.js
const Contact = require('../models/contactModel');

exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            res.status(404).json({ message: 'Contact not found' });
        } else {
            res.json(contact);
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.createContact = async (req, res) => {
    try {
        const newContact = await Contact.create(req.body);
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({ error: 'Bad request' });
    }
};