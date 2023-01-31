import React, { useEffect } from "react";
import { projects } from "./utillities/projects";
import ReactGA from "react-ga";
import Card from "./Card";

const Projects = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <div className="container my-3 py-4">
        <Card key={projects.id} projects={projects} />
      </div>
    </>
  );
};

export default Projects;
