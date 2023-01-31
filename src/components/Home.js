import React from "react";

const Home = () => {
  const home = {
    name: ` Ashish Keshri`,
    text: ` All coding projects are built from the ground up, from planning and
    designing all the way to solving real-life problems with code.`,
  };

  const professinalWork = [
    {
      id: 1,
      companyName: "Bariﬂo Labs Pvt. Limited",
      location: "Bhubaneshwar",
      role: "Front End Developer",
      start: "06/2022",
      end: "10/2022",
      side: 'right'
    },
    {
      id: 2,
      companyName: " Trioﬁ Technology",
      location: "Bangalore",
      role: "Front End Developer",
      start: "12/2021",
      end: "02/2022",
      side: 'left',
    },
  ];

  return (
    <div className="container my-3 py-4">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <p className="display-5 text-light">Hi, I am {home?.name}</p>
          <p className="fs-4 text-light">{home?.text}</p>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="timeline">
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
            {/* <div className="container__timeline left">
              <div className="content">
                <div className="card-body">
                  <h5 className="card-title">
                    Bariﬂo Labs Pvt. Limited -
                    <span className="text-muted">Bhubaneshwar</span>
                  </h5>
                  <p>Front End Developer</p>
                  <p>06/2022 - 10/2022</p>
                </div>
              </div>
            </div>

            <div className="container__timeline right">
              <div className="content">
                <div className="card-body">
                  <h5 className="card-title">
                    Trioﬁ Technology -
                    <span className="text-muted">Bangalore</span>
                  </h5>
                  <p>Front End Developer</p>
                  <p>12/2021 - 02/2022 </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
