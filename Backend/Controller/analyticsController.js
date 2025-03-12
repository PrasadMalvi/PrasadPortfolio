const Visitor = require("../Models/VisitorSchema");
exports.trackVisitor = async (req, res) => {
  try {
    const ip =
      req.ip || req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const userAgent = req.headers["user-agent"];

    const visitor = new Visitor({ ip, userAgent });
    await visitor.save();

    res.status(200).json({ message: "Visitor tracked successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};
