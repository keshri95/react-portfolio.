import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ReactGA from "react-ga";
import React from "react";
import Footer from "./components/Footer";

const TRACKING_ID = `${process.env.REACT_ANALYTICS}`;
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
