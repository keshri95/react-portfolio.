import React from "react";
const Card = ({ projects }) => {
  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {projects.map(({ id, title, date, body, gitUrl, liveUrl, end }) => {
        return (
          <div className="col" key={id}>
            <div className="card h-100 card__background__color">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{date}</p>
                <p class="card-text"><small class="text-muted">{end}</small></p>
                <p className="card-text">{body}</p>
              </div>
              <div className=" btn btn-group d-flex">
                <a
                  href={gitUrl}
                  target={"_blank"}
                  className="btn btn-primary"
                 rel="noopener"
                >
                  Code
                </a>
                <a
                  href={liveUrl}
                  target={"_blank"}
                  className="btn btn-danger"
                 rel="noopener"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Card;
