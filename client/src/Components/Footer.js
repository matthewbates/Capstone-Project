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
        About
        the
        developer
        className="text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1" }}
      >
        <div className="container p-4 pb-1">
          <section className="mb-4">
            <p className="footer-text">
              <i>Developer Links</i>
            </p>{" "}
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://www.linkedin.com/in/matthew-bates-71b7bb79/"
              role="button"
              size="lg"
            >
              <MDBIcon fab icon="linkedin-in" size="lg" />
            </a>{" "}
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="#https://github.com/matthewbates"
              role="button"
              size="lg"
            >
              <MDBIcon fab icon="github" size="lg" />
            </a>{" "}
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#bababa" }}
              href="https://medium.com/me/stories/public"
              role="button"
              size="lg"
            >
              <MDBIcon fab icon="medium" size="lg" />
            </a>
          </section>
        </div>
      </MDBFooter>
    </div>
  );
}
export default Footer;
