import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ReactGA from "react-ga";
const Home = React.lazy(() => import("./components/Home"));
const Error = React.lazy(() => import("./components/Error"));
const Projects = React.lazy(() => import("./components/Projects"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const TRACKING_ID = `${process.env.REACT_ANALYTICS}`;
ReactGA.initialize(TRACKING_ID);
function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading.....</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
