import React, { useEffect } from "react";
import { projects } from "./utillities/projects";
import ReactGA from "react-ga";

const Projects = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <div className="container my-3 py-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {projects.map((elem) => {
            const { id, title, date, body, gitUrl, liveUrl } = elem;
            return (
              <div className="col" key={id}>
                <div className="card h-100 card__background__color">
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{date}</p>
                    <p className="card-text">{body}</p>
                  </div>
                  <div className=" btn btn-group d-flex ">
                    <a
                      href={gitUrl}
                      target={"_blank"}
                      className="btn btn-primary"
                    >
                      Code
                    </a>
                    <a
                      href={liveUrl}
                      target={"_blank"}
                      className="btn btn-danger"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
