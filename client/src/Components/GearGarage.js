// *LOOK UP REACT CONTEXT

import React, { useState, useEffect } from "react";
import Packlist from "./Packlist";
import {
  Container,
  Col,
  Row,
  Button,
  Card,
  ListGroup,
  UnorderedListGroup,
} from "react-bootstrap";
import Checklist from "./Packlist";

function GearGarage({ currentUser, SetCurrentUser, gearTypes, handleSelect }) {
  const [addToPacklist, setAddToPacklist] = useState([]);

  function handleAddToPacklist(event) {
    const pieceOfGear = event.target.id;
  }

  return (
    <div>
      <u>
        <h2 className="gear-garage-title">Add Gear To Your Packlist!</h2>
      </u>
      <Col className="gear-garage-styling">
        {gearTypes.map((type) => {
          const list = type.gears.map((gear) => {
            return (
              <Container
                sm={12}
                md={12}
                lg={6}
                className="gap-3 mb-2 mt-2"
                key={gear.id}
                id={gear.id}
              >
                <ListGroup>{gear.name}</ListGroup>
              </Container>
            );
          });
          return (
            // make buttons to add to packlist
            <div key={type.id}>
              <Card.Text>{type.name}</Card.Text>
              <Container className="gear-item-styling">
                {list.map((gearItem) => (
                  <div key={gearItem.id}>
                    <br />
                    <Button
                      onClick={() =>
                        // selectedGearTypes is the CURRENT STATE; for this item that we clicked on, add it to a list that includes everything that's currently in state
                        handleSelect((selectedGearTypes) => {
                          return [gearItem, ...selectedGearTypes];
                        })
                      }
                    >
                      {gearItem}
                    </Button>
                  </div>
                ))}
              </Container>
            </div>
          );
        })}
      </Col>
    </div>
  );
}

export default GearGarage;
