import React, { useState, useEffect } from "react";
import { Col, Card, Image, Button, ListGroup } from "react-bootstrap";

// pass a prop in for a gears' ID from GearGarage component
function Packlist({ selectedGearTypes }) {
  return (
    <div>
      <h2>My Packlist</h2>
      <Card style={{ width: "14rem" }}>
        <ListGroup variant="flush">
          {/* these should resemble the added gears' ID */}
          {selectedGearTypes.map((selectedGear) => (
            <ListGroup.Item>{selectedGear}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
}

export default Packlist;

// each piece of gear is an instance
