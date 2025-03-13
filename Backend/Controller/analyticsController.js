const Analytics = require("../Models/AnalyticsSchema");

// 📌 Track Visitor

exports.trackVisitor = async (req, res) => {
  try {
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.connection.remoteAddress;
    const userAgent = req.headers["user-agent"];
    const pageUrl = req.body.page || "Unknown";

    let visitor = await Analytics.findOne({ ipAddress: ip });

    if (visitor) {
      visitor.pageViews += 1;
      visitor.lastVisitedPage = pageUrl;
    } else {
      visitor = new Analytics({
        ipAddress: ip,
        userAgent,
        lastVisitedPage: pageUrl,
      });
    }

    await visitor.save();
    res
      .status(200)
      .json({ message: `Visitor tracked: ${ip}, Page: ${pageUrl}` });
  } catch (error) {
    console.error("Error tracking visitor:", error);
    res.status(500).json({ error: "Server Error" });
  }
};

exports.getAnalytics = async (req, res) => {
  try {
    const visitors = await Analytics.find();
    res.status(200).json(visitors);
  } catch (error) {
    console.error("Error fetching analytics:", error);
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
