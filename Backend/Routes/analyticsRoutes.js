const express = require("express");
const {
  trackVisitor,
  getAnalytics,
} = require("../Controller/analyticsController");

const router = express.Router();

router.post("/track", trackVisitor); // ✅ Route to track visitors
router.get("/analytics", getAnalytics); // ✅ Route to get analytics data

module.exports = router;
