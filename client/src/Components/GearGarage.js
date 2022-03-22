// *LOOK UP REACT CONTEXT

import React, { useState, useEffect } from "react";
import Packlist from "./Packlist";
import {
  Container,
  Col,
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
      <h2>What Gear Will I Need?</h2>
      <Container>
        <Col>
          {gearTypes.map((type) => {
            const list = type.gears.map((gear) => {
              return (
                <div key={gear.id}>
                  <ListGroup>{gear.name}</ListGroup>
                </div>
              );
            });

            return (
              // make buttons to add to packlist
              <div key={type.id}>
                <Card.Text>{type.name}</Card.Text>
                <Container>
                  {list.map((gearItem) => (
                    <div key={gearItem.id}>
                      <Button
                        variant="success"
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
      </Container>
    </div>
  );
}

export default GearGarage;
