import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";
import "@fortawesome/fontawesome-free/css/all.min.css";

const trackVisitor = async () => {
  try {
    await fetch("https://prasadportfolio.onrender.com/api/visitor/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error tracking visitor:", error);
  }
};

const App = () => {
  useEffect(() => {
    trackVisitor();
  }, []);

  return (
    <Router>
      <div>
        <HomePage />
      </div>
    </Router>
  );
};

export default App;
