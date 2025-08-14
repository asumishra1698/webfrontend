import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./config/appRoutes";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
