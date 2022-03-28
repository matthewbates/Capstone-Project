import React, { Fragment } from "react";
import { Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import Disclaimer from "./Disclaimer";

function Footer({ currentUser }) {
  return (
    <div className="home-footer">
      <MDBFooter
        className="text-center text-white"
        style={{ backgroundColor: "#0a4275" }}
      >
        <MDBContainer className="p-4 pb-0">
          <section>
            <p className="d-flex justify-content-center align-items-center">
              <span className="me-3">Not Registered?</span>
              <Link to="/signup">Create an account</Link>
            </p>
          </section>
        </MDBContainer>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <section className="mb-1">
            <a>View developers':{" "}</a>
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#C0C0C0" }}
              href="https://medium.com/me/stories/public"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
              <b>Medium</b>
            </a>
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://www.linkedin.com/in/matthew-bates-71b7bb79/"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
              <b>LinkedIn</b>
            </a>
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="https://github.com/matthewbates"
              role="button"
            >
              <MDBIcon fab icon="github" />
              <b>GitHub</b>
            </a>
            {" "}<a>if you'd like to learn more.</a>
          </section>
        </div>
      </MDBFooter>
    </div>
  );
}
export default Footer;
