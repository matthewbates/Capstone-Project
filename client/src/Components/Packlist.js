import React, { useState, useEffect } from "react";
import {
  Col,
  Card,
  Image,
  Button,
  ListGroup,
  Container,
} from "react-bootstrap";
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

function Packlist({ selectedGearTypes, deleteGear }) {
  return (
    <div className="checklist-styling">
      <br />
      <h3 className="gear-garage-header">Checklist</h3>
      <br />
      {/* <div className="checklist-image">
        <img src="https://www.atimeshare.com/wp-content/uploads/2021/07/four-seasons.jpg" />
      </div> */}
      <p>Items that were added from Gear Garage will show up below.</p>
      <p>Make sure to pack accordingly, and to always check the weather!</p>
      <MDBRow className="checklist-styling">
        <MDBCol horizontal className="gap-1 mb-8 mt-0">
          {selectedGearTypes.map((selectedGear) => (
            // <Button onClick={() => deleteGear(selectedGear.id)}>
            <MDBListGroupItem className="packlist-styling gap-1">
              {selectedGear}
            </MDBListGroupItem>
            // </Button>
          ))}
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Packlist;

// each piece of gear is an instance
