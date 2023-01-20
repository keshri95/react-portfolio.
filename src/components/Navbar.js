import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import resume from "../components/utillities/resume.pdf";

const Navbar = () => {

  const [active, setActive] = useState("Home");
  const location = useLocation();

  useEffect(() => {

    if (location.pathname === "/"){
      setActive("Home");
    } 
    else if(location.pathname === "/about"){
      setActive("About");
    }
    else if(location.pathname === "/projects"){
      setActive("Projects");
    }
    else if (location.pathname === "/contact"){
      setActive("Contact");
    } 
    else if(location.pathname === "*"){
      setActive("Error");
    }

  }, [location])

  return (
    <>
      <div className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <Link to="/" className={`navbar-brand ${ active === "Home" ? "text-light" : "text-light"}`}
          onClick={() => setActive("Home")}
           >
            Ashish
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${ active === "Home" ? "text-light mx-2 btn btn-primary" : "text-light"}`}
                  onClick={() => setActive("Home")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  className={`nav-link ${ active === "About" ? "text-light mx-2 btn btn-primary" : "text-light"}`}
                  onClick={() => setActive("About")}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="projects"
                  className={`nav-link ${active === "Projects" ? "text-light mx-2 btn btn-primary" : "text-light"}`}
                  onClick={() =>setActive("Projects")}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  className={`nav-link ${active === "Contact" ? "text-light mx-2 btn btn-primary" : "text-light"}`}
                  onClick={() => setActive("Contact")}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a href={resume} download="Resume"
                  className="btn btn-bd-primary"
                >
                 Get Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
