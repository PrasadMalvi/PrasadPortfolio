import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./HomePage";
import "@fortawesome/fontawesome-free/css/all.min.css";

// ✅ Function to track visitors
const trackVisitor = async (pageUrl) => {
  try {
    await fetch("https://prasadportfolio.onrender.com/api/visitor/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page: pageUrl }),
    });
  } catch (error) {
    console.error("Error tracking visitor:", error);
  }
};

// ✅ Page Tracker Component
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackVisitor(location.pathname);
  }, [location.pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <PageTracker />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
