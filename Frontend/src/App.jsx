import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";

const trackVisitor = async () => {
  try {
    await fetch("http://localhost:5000/api/track", { method: "POST" });
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