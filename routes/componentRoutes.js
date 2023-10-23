// src/routes/componentRoutes.js
const express = require("express");
const componentController = require("../controllers/componentController");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Save files to the "uploads" directory
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Use the original file name
    }
});

const upload = multer({ storage });

const router = express.Router();

router.get("/", componentController.getAllComponent);
router.get("/:id", componentController.getComponentById);
router.post("/", upload.single('thumbnail'),  componentController.createComponent);
router.delete("/:id", componentController.deleteComponent);
router.put("/:id", componentController.editComponent);

module.exports = router;
