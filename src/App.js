import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import JoinUs from "./components/JoinUs";
import About from "./components/About";
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <JoinUs />
      <About />
      {/* Info */}
      {/* Legal Text */}
      {/* Footer */}
    </div>
  );
}

export default App;
