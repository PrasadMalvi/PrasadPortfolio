const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema({
  ipAddress: String,
  userAgent: String,
  pageViews: { type: Number, default: 1 },
  firstVisit: { type: Date, default: Date.now },
});

const Analytics = mongoose.model("Analytics", analyticsSchema);
module.exports = Analytics;
