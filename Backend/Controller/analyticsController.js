const Analytics = require("../Models/AnalyticsSchema"); // ✅ Import correctly

// 📌 Track Visitor

exports.trackVisitor = async (req, res) => {
  try {
    console.log("Received tracking request:", req.body);

    const ip =
      req.ip || req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const userAgent = req.headers["user-agent"];

    let visitor = await Analytics.findOne({ ipAddress: ip });

    if (visitor) {
      visitor.pageViews += 1;
      console.log("Updating visitor:", visitor);
    } else {
      visitor = new Analytics({ ipAddress: ip, userAgent });
      console.log("New visitor created:", visitor);
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
