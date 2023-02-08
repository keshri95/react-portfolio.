import { AiTwotonePhone } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import resume from "../components/utillities/resume.pdf";

const Contact = () => {
  const contactDetails = {
    id: 1,
    phoneNo: "+919071360199",
    email: "keshri.ashish1@gmail.com",
    location: "Bangalore",
    linkdeinId: "https://www.linkedin.com/in/ashish-keshri-b1a250188",
    githubId: "https://github.com/keshri95",
  };

  return (
    <>
      <div className="container">
        <div className="position-absolute top-50 start-50 translate-middle my-4">
          <div className="row">
            <div className="col contact__page contact__border">
              <div>
                <p className="display-6">Contact Information</p>
              </div>

              <div className="d-flex flex-column">
                <div className="d-flex gap-4">
                  <AiTwotonePhone fontSize={25} color={"pink"} />
                  <p className="fs-5">
                    <a
                      className="text-decoration-none text-light"
                      href={`tel:${contactDetails?.phoneNo}`}
                    >
                      {contactDetails?.phoneNo}
                    </a>
                  </p>
                </div>

                <div className="d-flex gap-4">
                  <AiFillMessage fontSize={25} color={"pink"} />
                  <p className="fs-5">
                    <a
                      className="text-decoration-none text-light"
                      href={`mailto:${contactDetails?.email}`}
                    >
                      {contactDetails?.email}
                    </a>
                  </p>
                </div>

                <div className="d-flex gap-4">
                  <HiLocationMarker fontSize={25} color={"pink"} />
                  <p className="fs-5">{contactDetails?.location}</p>
                </div>

                <a
                  href={resume}
                  download="Resume"
                  className="btn btn-bd-primary"
                >
                  Get Resume
                </a>
              </div>

              <div className="d-flex justify-content-evenly my-3">
                <a
                  href={contactDetails?.linkdeinId}
                  target="_blank"
                  rel="noopener"
                  className="rounded-circle p-2 btn btn-primary"
                >
                  <BsLinkedin fontSize={25} />
                </a>
                <a
                  href={contactDetails?.githubId}
                  target="_blank"
                  rel="noopener"
                  className="rounded-circle p-2 btn btn-dark"
                >
                  <AiFillGithub fontSize={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
