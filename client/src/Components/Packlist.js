import React, { useState, useEffect } from "react";
import { Col, Card, Image, Button, ListGroup } from "react-bootstrap";

// pass a prop in for a gears' ID from GearGarage component
function Packlist({ selectedGearTypes }) {
  const [removeGear, setRemoveGear] = useState("");

  return (
    <div>
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header className="bg-color dark">My PackList</Card.Header>
        <ListGroup variant="flush">
          {/* after MVP, handle removing item if they want to take it out */}
          {selectedGearTypes.map((selectedGear) => (
            <ListGroup.Item>{selectedGear}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
      {/* put a save button; goes to back end */}
    </div>
  );
}

export default Packlist;

// each piece of gear is an instance
