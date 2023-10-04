// src/controllers/contactController.js
const Contact = require("../models/contactModel");
const { sendContactEmail } = require("../utils/emailSender"); // Adjust the path as needed

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404).json({ message: "Contact not found" });
    } else {
      res.json(contact);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = await Contact.create(req.body);
    await sendContactEmail(
      { name, email, subject, message },
      {
        adminRecipient: "thesatishjassal@gmail.com",
        adminSubject: "New Contact Form Submission",
      }
    );
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};
