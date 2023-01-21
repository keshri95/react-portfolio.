import React from "react";
import photo from "../components/utillities/photo.png";
const About = () => {
  return (
    <>
    <div className="container my-3 py-4">
      <div id="about" className="row cover">
        <h2 className="text-center text-light">About Me</h2>

        <div className="row">
          <div className="col-md-6 text-center about-info">
            <img
              className="img-circle text-center profile-img"
              src={photo}
            />
            <p className="text-center text-light fs-5">
              I'm Ashish Keshri, a self taught Web Development from Bangalore. I'm currently
              learning Web Development.I have completed B.E.as Information Science & Engineering so I can't wait till I get to the point where I can jump into the more interactive
              data visualizations and put what I'm learning to good use. But for
              now I'm having fun learning the basics!
            </p>
          </div>

          <div className="col-md-6 about-tools ">
            <p className="text-center text-light fs-3">Here's a few of the tools I use</p>
            <div className="d-flex justify-content-evenly">
              <ul className="fs-4 about__tools">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
              </ul>
              <ul className="fs-4 about__tools">
                <li>React js</li>
                <li>Git</li>
                <li>C++</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
