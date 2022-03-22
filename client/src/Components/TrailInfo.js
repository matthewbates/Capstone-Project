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
      <Image src={image} />
      <Col sm={12} md={12} lg={12} className="justify-content-center mb-2 mt-2">
        <hr />
        <div className="d-flex align-items-center justify-content-center">
          <Row className="d-flex align-items-center justify-content-center col-11">
            <Col className="text-center">
              <p className="text-uppercase text-muted beer-title">Name</p>

              <h5 className="beer-details">{name}</h5>
            </Col>
            <Col className="text-center">
              <h6 className="text-uppercase text-muted beer-title">
                Out & Back?
              </h6>

              <h5 className="beer-details">{out_and_back}</h5>
            </Col>
            <Col className="text-center">
              <h6 className="text-uppercase text-muted beer-title">Loop?</h6>

              <h5 className="beer-details">{loop}</h5>
            </Col>
            <Col className="text-center">
              <h6 className="text-uppercase text-muted beer-title">
                Difficulty
              </h6>

              <h5 className="beer-details">{difficulty}</h5>
            </Col>
            <Col className="text-center">
              <h6 className="text-uppercase text-muted beer-title">Length</h6>

              <h5 className="beer-details">{length}</h5>
            </Col>
            <Col className="text-center">
              <h6 className="text-uppercase text-muted beer-title">
                Elevation
              </h6>

              <h5 className="beer-details">{elevation}</h5>
            </Col>
            <Col className="text-center">
              <h6 className="text-uppercase text-muted beer-title">Dogs?</h6>

              <h5 className="beer-details">{dogs}</h5>
            </Col>
            <Col className="text-center">
              <h6 className="text-uppercase text-muted beer-title">Bikes?</h6>

              <h5 className="beer-details">{bikes}</h5>
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
