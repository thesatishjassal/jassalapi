const User = require("../models/user");

const DownloadForm = (req, res) => {
  const { name, email, profession } = req.body;

  const user = new User({
    name,
    email,
    profession,
  });

  user.save((err) => {
    if (err) {
      console.error("Error saving user:", err);
      return res.status(500).send("Error saving user.");
    }

    const token = jwt.sign({ _id: user._id }, secretKey);
    res.redirect(`/profile?token=${token}`);
  });
};

const renderProfile = (req, res) => {
  // The token verification code remains the same
};

module.exports = { DownloadForm, renderProfile };
