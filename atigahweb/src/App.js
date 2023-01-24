import React, { useState, useEffect, Component } from "react";
import Button from "react-bootstrap/Button";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/NavBarCss.css";
import index from "./styles/index.css";
import Footer from "./components/Footer";
import "./styles/Footer.css";
import AboutSection from "./components/AboutSection";
function App() {
  return (
    <>
      <NavBar />
      <AboutSection />
      <Footer />
    </>
  );
}

export default App;
