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
  /*
  const initalState = {
    fname: "",
    lname: "",
    email: "",
    contact: "",
    message: "",
  };

  const [state, setState] = useState(initalState);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState({});

  console.log(state);

  const { fname, lname, email, contact, message } = state;

  const submitHandler = (e) => {
    e.preventDefault();
    setIsError(validate(state));
    setIsSubmit(true);
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(isError).length === 0 && isSubmit) {
      console.log(state);
    }
  }, [isError]);

  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const errors = {};

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Not a valid email";
    }
    if (!values.fname) {
      errors.fname = "First name required";
    }
    if (!values.lname) {
      errors.lname = "Last name required";
    }
    if (!values.contact) {
      errors.contact = "Contact number required";
    }
    if (!values.message) {
      errors.contact = "Message required";
    }

    return errors;
  };

  */

  return (
        <div className="container ">
      <div className="position-absolute top-50 start-50 translate-middle my-4">
        <div className="row">
          <div className="col contact__page contact__border">
            <div>
              <p className="display-6">Contact Information</p>
              <p className="fs-5">Fill up the form details</p>
            </div>

            <div className="d-flex flex-column">
              <div className="d-flex gap-4">
                <AiTwotonePhone fontSize={25} color={"pink"} />
                <p className="fs-5">{contactDetails?.phoneNo}</p>
                {/* <p className="fs-5">{contactDetails.phoneNo}</p> */}
              </div>

              <div className="d-flex gap-4">
                <AiFillMessage fontSize={25} color={"pink"} />
                <p className="fs-5">{contactDetails?.email}</p>
              </div>

              <div className="d-flex gap-4">
                <HiLocationMarker fontSize={25} color={"pink"} />
                <p className="fs-5">{contactDetails?.location}</p>
              </div>

              <a href={resume} download="Resume" className="btn btn-bd-primary">
                Get Resume
              </a>
            </div>

            <div className="d-flex justify-content-evenly my-3">
              <a
                href={contactDetails?.linkdeinId}
                target="_blank"
                className="rounded-circle p-2 btn btn-primary"
              >
                <BsLinkedin fontSize={25} />
              </a>
              <a
                href={contactDetails?.githubId}
                target="_blank"
                className="rounded-circle p-2 btn btn-dark"
              >
                <AiFillGithub fontSize={25} />
              </a>
            </div>
          </div>

          {/* <div className="col-8 col-4 p-3">
          <form className="row g-3" onSubmit={submitHandler}>
            <div className="col-md-6 ">
              <label htmlFor="inputPassword4" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                name="fname"
                value={fname}
                placeholder="Enter your first name"
                autoComplete="off"
                onChange={inputChangeHandler}
              />
              <p className="text-danger">{isError.fname}</p>
            </div>

            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control "
                id="inputPassword4"
                name="lname"
                value={lname}
                placeholder="Enter your last name"
                autoComplete="off"
                onChange={inputChangeHandler}
              />
              <p className="text-danger">{isError.lname}</p>
            </div>

            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control "
                id="inputEmail4"
                name="email"
                value={email}
                autoComplete="off"
                placeholder="Enter your email"
                onChange={inputChangeHandler}
              />
              <p className="text-danger">{isError.email}</p>
            </div>

            <div className="col-6">
              <label htmlFor="number" className="form-label">
                Contact
              </label>
              <input
                type="number"
                className="form-control "
                id="inputAddress2"
                name="contact"
                value={contact}
                placeholder="Enter your contact number"
                autoComplete="off"
                onChange={inputChangeHandler}
              />
              <p className="text-danger">{isError.contact}</p>
            </div>

            <div className="col-12">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control "
                id="validationTextarea"
                name="message"
                value={message}
                autoComplete="off"
                placeholder="Some message.."
                onChange={inputChangeHandler}
              />
              <p className="text-danger">{isError.message}</p>
            </div>

            <div className="col-12 d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" className="btn btn-primary btn-lg">
                Send Message
              </button>
            </div>
          </form>
        </div> */}
        </div>
      </div>

      // </div>
  );
};

export default Contact;
