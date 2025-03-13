const Analytics = require("../Models/AnalyticsSchema"); // ✅ Import correctly

// 📌 Track Visitor

exports.trackVisitor = async (req, res) => {
  try {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress; // Get IP
    const userAgent = req.headers["user-agent"]; // Get browser info

    // Check if visitor already exists
    let visitor = await Analytics.findOne({ ipAddress: ip });

    if (visitor) {
      visitor.pageViews += 1; // Increment page views
    } else {
      visitor = new Analytics({ ipAddress: ip, userAgent });
    }

    await visitor.save();
    res.status(200).json({ message: "Visitor tracked successfully" });
  } catch (error) {
    console.error("Error tracking visitor:", error);
    res.status(500).json({ error: "Server Error" });
  }
};

// 📌 Get Analytics Data
exports.getAnalytics = async (req, res) => {
  try {
    const visitors = await Analytics.find();
    res.status(200).json(visitors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};
