const express = require('express');
const router = express.Router();
const { generateQR, readQR } = require("../controllers/qrController");

router.post("/generate/:id", generateQR);
router.post("/read/:id", readQR);

module.exports = router;