const express = require("express");
const { submitContactForm } = require("../Controller/contactController");

const router = express.Router();

router.post("/submit", submitContactForm);

module.exports = router;
