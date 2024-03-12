import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Product from "./components/Product";
import Review from "./components/Review";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div >
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="menu">
          <Menu />
        </div>

        <div id="about us">
          <About Us/>
        </div>

        <div id="product">
          <Product/>
        </div>

        <div id="review">
          <Review/>
        </div>

        <div id="footer">
          <Footer/>
        </div>

      </main>
    </div>
  );
};

export default App;
