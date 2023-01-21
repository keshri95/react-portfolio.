import React from 'react'

const About = () => {
  return (
       <div className="container my-2 ">
      <div id="about" className="row cover">
        <h2 className="text-center">About Me</h2>

        <div className="row">
          <div className="col-md-6 text-center about-info">
            <img
              className="img-circle text-center profile-img"
              src="https://sonorangirl.github.io/img/Square-Ireland.png"
            />
            <p className="text-center fs-5">
              I'm a self taught web developer from Scottsdale, AZ. I'm currently
              learning Javascript development with FreeCodeCamp and Treehouse. I
              also have degrees in Biology and Sustainability so I can't wait
              till I get to the point where I can jump into the more interactive
              data visualizations and put what I'm learning to good use. But for
              now I'm having fun learning the basics!
            </p>
          </div>

          <div className="col-md-6 about-tools ">
            <p className="text-center fs-3">Here's a few of the tools I use</p>
            <div className="d-flex justify-content-evenly">
              <ul className="fs-4">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
              </ul>
              <ul className="fs-4">
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
  )
}

export default About