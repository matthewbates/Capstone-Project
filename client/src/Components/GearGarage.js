// *LOOK UP REACT CONTEXT

import React, { useState, useEffect } from "react";
import Packlist from "./Packlist";
import {
  Container,
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
      <h2>Add Gear To Your Pack</h2>
      <Container>
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
                {/* rename li item */}
                {list.map((gearItem) => (
                  <div key={gearItem.id}>
                    <Button
                      onClick={() =>
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
      </Container>
    </div>
  );
}

export default GearGarage;
