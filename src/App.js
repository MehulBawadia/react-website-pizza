import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData } from "./components/Products/data";

function App() {
  return (
    <Router basename={window.location.pathname || ""}>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose Your Favorite" data={productData} />
    </Router>
  );
}

export default App;
