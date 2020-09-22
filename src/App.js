import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import JoinUs from "./components/JoinUs";
import About from "./components/About";
import Information from "./components/Information";
import LegalText from "./components/LegalText";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <JoinUs />
      <About />
      <Information />
      <LegalText />
      <Footer />
    </div>
  );
}

export default App;
