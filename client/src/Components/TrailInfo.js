import React from "react";
import { Container, Col, Card, Row, Button, Image } from "react-bootstrap";
import Trailheads from "./Trailheads";

function TrailInfo({
  name,
  image,
  out_and_back,
  loop,
  difficulty,
  length,
  elevation,
  dogs,
  bikes,
}) {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <Image src={image} alt="route image" />
      </div>
      <Col sm={12} md={12} lg={12}>
        <hr />
        <div className="d-flex align-items-center justify-content-center">
          <Row className="d-flex align-items-center justify-content-center col-11">
            <Col className="text-center">
              <p>Name</p>

              <h5 className="beer-details">{name}</h5>
            </Col>
            <Col className="text-center">
              <h6>Out & Back?</h6>

              <h5>{out_and_back}</h5>
            </Col>
            <Col className="text-center">
              <h6>Loop?</h6>

              <h5>{loop}</h5>
            </Col>
            <Col className="text-center">
              <h6>Difficulty</h6>

              <h5>{difficulty}</h5>
            </Col>
            <Col className="text-center">
              <h6>Length</h6>

              <h5>{length}</h5>
            </Col>
            <Col className="text-center">
              <h6>Elevation</h6>

              <h5>{elevation}</h5>
            </Col>
            <Col className="text-center">
              <h6>Dogs?</h6>

              <h5>{dogs}</h5>
            </Col>
            <Col className="text-center">
              <h6>Bikes?</h6>

              <h5>{bikes}</h5>
            </Col>

            <Col lg={3} className="text-center">
              <Button className="" variant="outline-dark">
                Add To Home
              </Button>
            </Col>
          </Row>
        </div>
      </Col>
    </>
  );
}
export default TrailInfo;
