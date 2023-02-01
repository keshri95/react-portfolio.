import React from "react";

const ExperianceCard = ({professinalWork}) => {
  return (
    <>
      {professinalWork.map(
        ({ id, companyName, location, role, start, end, side }) => {
          return (
            <div className={`container__timeline ${side} `} key={id}>
              <div className="content">
                <div className="card-body">
                  <h5 className="card-title">
                    {companyName} -
                    <span className="text-muted">{location}</span>
                  </h5>
                  <p>{role}</p>
                  <p>
                    {start} - {end}
                  </p>
                </div>
              </div>
            </div>
          );
        }
      )}
    </>
  );
};

export default ExperianceCard;
