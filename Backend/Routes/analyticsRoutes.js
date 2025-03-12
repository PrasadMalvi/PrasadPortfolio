const express = require("express");
const { trackVisitor } = require("../Controller/analyticsController");

const router = express.Router();

router.post("/track", trackVisitor);

module.exports = router;
