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
      <p>Welcome to the Gear Garage.</p>
      <p>
        Whether you're setting out for a dayhike or a several day excursion, use
        this page to add the items you'll want to bring along with you
      </p>
      <p>
        If it's your first time in the elements, it might be best to borrow or
        rent some of these items. As you become a more experienced outdoorsman,
        you'll find that a lot of the fun is derived in figuring out what to
        bring along to meet your particular needs.
      </p>
      <div>
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
              <div className="full-gear-garage" key={type.id}>
                <h5>{type.name}</h5>
                {/* <hr></hr> */}
                <Container className="gear-item-styling">
                  {list.map((gearItem) => (
                    <div key={gearItem.id}>
                      <br />
                      <Button
                        className="gear-garage-buttons"
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
        </Col>
      </div>
    </div>
  );
}

export default GearGarage;
