import React, { useState, useEffect, Component } from "react";
import { Route, Outlet, Routes } from "react-router-dom";
import Button from "react-bootstrap/Button";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/NavBarCss.css";
import index from "./styles/index.css";
import Footer from "./components/Footer";
import "./styles/Footer.css";
import AboutSection from "./components/AboutSection";
import Resume from "./components/Resume";
import Projects from "./components/Projects";


function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<HomePageWrapper />} />
        <Route path="/resume" element={<ResumeWrapper />} />
        <Route path="/projects" element={<ProjectWrapper />} />
      </Routes>
    </div>
      );
}

function HomePageWrapper() {
  return (
    <div>
      <NavBar />
      <AboutSection />
      <Footer />
    </div>
  );
}

function ResumeWrapper() {
  return (
    <div>
      <NavBar />
      <Resume />
      <Footer />
    </div>
  );
}

function ProjectWrapper() {
  return (
    <div>
      <NavBar />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
