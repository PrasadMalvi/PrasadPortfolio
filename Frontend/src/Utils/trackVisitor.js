import API from "../api";

const trackVisitor = async () => {
  try {
    await API.post("/analytics/track");
  } catch (error) {
    console.error("Visitor tracking failed", error);
  }
};

export default trackVisitor;
