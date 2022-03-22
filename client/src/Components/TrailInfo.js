import React from "react";
import { Container, Col, Card, Button } from "react-bootstrap";
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
  lat,
  lng,
}) {
  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={image} alt="image name" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Out And Back: {out_and_back}</Card.Text>
          <Card.Text>Loop: {loop}</Card.Text>
          <Card.Text>Difficulty: {difficulty}</Card.Text>
          <Card.Text>Total Length: {length}</Card.Text>
          <p>
            <b>Elevation Profiler</b>
          </p>
          <Card.Text>{elevation}</Card.Text>
          <Card.Text>{dogs}</Card.Text>
          <Card.Text>{bikes}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
export default TrailInfo;
