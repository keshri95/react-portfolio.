import photo from "../components/utillities/photo.png";
const About = () => {
  const aboutMe = {
    id: 1,
    aboutMe: `I'm Ashish Keshri, a self taught Web Development from Bangalore. I'm currently
    learning Web Development.I have completed B.E.as Information Science & Engineering so I can't wait till I get to the point where I can jump into the more interactive
    data visualizations and put what I'm learning to good use. But for
    now I'm having fun learning the basics!`,
  };

  const toolsCol = [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS",
    },
    {
      id: 3,
      name: "JavaScript",
    },
    {
      id: 4,
      name: "Bootstrap",
    },
    {
      id: 5,
      name: "SASS/SCSS",
    },
  ];

  const toolsDiv = [
    {
      id: 1,
      name: "React js",
    },
    {
      id: 2,
      name: "Git",
    },
    {
      id: 3,
      name: "C++",
    },
    {
      id: 4,
      name: "SQL",
    },
    {
      id: 5,
      name: "Material UI",
    },
  ];

  return (
    <>
      <div className="container my-3">
        <div id="about" className="row cover">
          <h2 className="text-center text-light">About Me</h2>

          <div className="row">
            <div className="col-md-6 text-center about-info">
              <img
                className="img-circle text-center profile-img"
                src={photo}
                alt="img"
              />
              <p className="text-center text-light fs-5">{aboutMe.aboutMe}</p>
            </div>

            <div className="col-md-6 about-tools ">
              <p className="text-center text-light fs-3">
                Here's a few of the tools I use
              </p>
              <div className="d-flex justify-content-evenly">
                <ul className="fs-4 about__tools">
                  {toolsCol.map(({ name, id }) => {
                    return <li key={id}>{name}</li>;
                  })}
                </ul>
                <ul className="fs-4 about__tools">
                  {toolsDiv.map(({ name, id }) => {
                    return <li key={id}>{name}</li>;
                  })}
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
