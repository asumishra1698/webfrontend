import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// admin routes
import Login from "./admin/auth/login";
import Dashboard from "./admin/dashboard"; 
import Portfolio from "../src/website/pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />       
        <Route path="/login" element={<Login />} /> 
         <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;