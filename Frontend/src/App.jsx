import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";

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