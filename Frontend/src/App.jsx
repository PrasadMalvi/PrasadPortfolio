import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <Router>
      <div>
        <HomePage />
      </div>
    </Router>
  );
};

export default App;