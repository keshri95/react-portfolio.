import React from "react";

const Home = () => {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <p className="display-5 text-light">Hi, I am Ashish Keshri</p>
          <p className="fs-4 text-light">
            All coding projects are built from the ground up, from planning and
            designing all the way to solving real-life problems with code.
          </p>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="timeline">
            <div className="container__timeline left">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
