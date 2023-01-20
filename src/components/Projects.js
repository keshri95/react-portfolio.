import React from "react";
import { projects } from "./utillities/projects";

const Projects = () => {
  return (
    <>
    <div className="container my-3">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projects.map((elem) => {
          return (
            <div className="col" key={elem.id}>
              <div className="card h-100 card__background__color">   
                <div className="card-body">
                  <h5 className="card-title">{elem.title}</h5>
                  <p className="card-text">{elem.date}</p>
                  <p className="card-text">{elem.body}</p>                
                </div>
                <div className=" btn btn-group d-flex ">
                    <a
                      href={elem.gitUrl}
                      target={"_blank"}
                      className="btn btn-primary"
                    >
                      Code
                    </a>
                    <a
                      href={elem.liveUrl}
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
