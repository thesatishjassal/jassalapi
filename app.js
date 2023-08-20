// src/app.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors'); // Import the cors package
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./utils/errorHandler");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
const mongodbUri = process.env.MONGODB_URI;

mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use the cors middleware with appropriate options
app.use(
  cors({
      origin: 'http://localhost:3000', // Replace with the origin of your frontend app
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Add the allowed HTTP methods
      credentials: true, // Include cookies and credentials in the request
  })
);

app.use(errorHandler);
app.use(bodyParser.json());
app.use("/contacts", contactRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
