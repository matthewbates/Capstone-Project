import React, { useState, useEffect } from "react";
import {
  Col,
  Card,
  Image,
  Button,
  ListGroup,
  Container,
} from "react-bootstrap";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdb-react-ui-kit";

function Packlist({ selectedGearTypes, deleteGear }) {
  return (
    <div className="checklist-styling">
      <p>
        This is the checklist
      </p>
      <MDBContainer className="checklist-styling flex-fill">
        <MDBListGroup style={{ maxWidth: "22rem" }}>
          {selectedGearTypes.map((selectedGear) => (
            <Button onClick={() => deleteGear(selectedGear.id)}>
              <MDBListGroupItem>{selectedGear}</MDBListGroupItem>
            </Button>
          ))}
        </MDBListGroup>
      </MDBContainer>
    </div>
  );
}

export default Packlist;

// each piece of gear is an instance
