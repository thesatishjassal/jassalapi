const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const jwt = require("jsonwebtoken");

const secretKey =
  "https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ";

router.post("/download", (req, res) => {
  const user = userController.submitForm(req, res);
  const token = jwt.sign(user, secretKey);
  res.redirect(`/profile?token=${token}`);
});

router.get("/profile", (req, res) => {
  const token = req.query.token;

  if (!token) {
    return res.status(401).send("Authentication failed");
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    userController.renderProfile(req, res);
  } catch (err) {
    res.status(401).send("Authentication failed");
  }
});

module.exports = router;
