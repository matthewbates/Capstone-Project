import React, { useState, useEffect } from "react";
import { Col, Card, Image, Button, ListGroup, Container } from "react-bootstrap";

// pass a prop in for a gears' ID from GearGarage component
function Packlist({ selectedGearTypes, deleteGear }) {

  function renderDelete() {
    fetch(`gears/`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => deleteGear());
  }

  return (
    <div>
      <Container>
        <Col>
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header className="bg-color dark">My PackList</Card.Header>
            <ListGroup variant="flush">
              {selectedGearTypes.map((selectedGear) => (
                <Button onClick={renderDelete}>{selectedGear}</Button>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Container>
      {/* put a save button; goes to back end */}
    </div>
  );
}

export default Packlist;

// each piece of gear is an instance
