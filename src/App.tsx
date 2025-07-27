import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
// import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <Router>
      {/* <HelmetProvider> */}
        <AppRoutes />
      {/* </HelmetProvider> */}
    </Router>
  );
}

export default App;
