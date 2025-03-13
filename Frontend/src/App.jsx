import React, { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import HomePage from "./HomePage";
import "@fortawesome/fontawesome-free/css/all.min.css";

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

const App = () => {
  const location = useLocation();

  useEffect(() => {
    trackVisitor(location.pathname);
  }, [location.pathname]);

  return (
    <Router>
      <div>
        <HomePage />
      </div>
    </Router>
  );
};

export default App;
