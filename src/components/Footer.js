import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <>
    <div className="container-fluid bg-secondary">
      <p className="text-center text-light fs-4">Connect with me</p>
      <div className="d-flex justify-content-center">
        <div>
          <a
            href="https://www.linkedin.com/in/ashish-keshri-b1a250188/"
            target={"_blank"}
            className="rounded-circle p-1 mx-4 btn btn-primary"
            rel="noreferrer"
          >
            <BsLinkedin fontSize={25} />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/keshri95"
            target={"_blank"}
            className="rounded-circle p-1 mx-4 btn btn-dark"
            rel="noreferrer"
          >
            <AiFillGithub fontSize={25} />
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
