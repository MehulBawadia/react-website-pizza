import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";

function App() {
  return (
    <Router basename={window.location.pathname || ""}>
      <GlobalStyle />
      <Hero />
    </Router>
  );
}

export default App;
