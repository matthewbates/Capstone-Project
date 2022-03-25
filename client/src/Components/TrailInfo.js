import React from "react";
import {
  Container,
  Col,
  Card,
  Row,
  Button,
  Image,
  ListGroup,
} from "react-bootstrap";
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
      <div className="d-flex align-items-center justify-content-center bg-dark">
        {/* <div className="trail-info-styling"> */}
        <Image src={image} alt="route image" />
      </div>
      <Col className="bg-dark">
        <Row sm={12} md={12} lg={12}>
          <hr />

          <ListGroup
            horizontal
            className="d-flex align-items center justify-content-center"
          >
            <ListGroup.Item className="text-center">
              <p>Name:</p>

              <h5 className="beer-details">{name}</h5>
            </ListGroup.Item>
            <ListGroup.Item className="text-center">
              <h6>Out & Back?</h6>

              <h5>{out_and_back}</h5>
            </ListGroup.Item>
            <ListGroup.Item className="text-center">
              <h6>Loop?</h6>

              <h5>{loop}</h5>
            </ListGroup.Item>
            <ListGroup.Item className="text-center">
              <h6>Difficulty:</h6>

              <h5>{difficulty}</h5>
            </ListGroup.Item>
            <ListGroup.Item className="text-center">
              <h6>Length:</h6>

              <h5>{length} miles</h5>
            </ListGroup.Item>
            <ListGroup.Item className="text-center">
              <h6>Elevation:</h6>

              <h5>{elevation}</h5>
            </ListGroup.Item>
            <ListGroup.Item className="text-center">
              <h6>Dogs Allowed?</h6>

              <h5>{dogs}</h5>
            </ListGroup.Item>
            <ListGroup.Item className="text-center">
              <h6>Bikes Allowed?</h6>

              <h5>{bikes}</h5>
            </ListGroup.Item>
          </ListGroup>
        </Row>
      </Col>
    </>
  );
}
export default TrailInfo;
