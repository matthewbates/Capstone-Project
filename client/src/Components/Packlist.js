import React, { useState, useEffect } from "react";
import { Col, Card, Image, Button, ListGroup } from "react-bootstrap";

// pass a prop in for a gears' ID from GearGarage component
function Packlist({ selectedGearTypes }) {
  const [removeGear, setRemoveGear] = useState("");

  return (
    <div>
      <h2>My Packlist</h2>
      <Card style={{ width: "14rem" }}>
        <ListGroup variant="flush">
          {/* these should resemble the added gears' ID */}
          {/* after MVP, handle removing item if they want to take it out */}
          {selectedGearTypes.map((selectedGear) => (
            <Button>{selectedGear}</Button>
          ))}
        </ListGroup>
      </Card>
      {/* put a save button; goes to back end */}
    </div>
  );
}

export default Packlist;

// each piece of gear is an instance
