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

function GearGarage({ currentUser, SetCurrentUser, gears, gearTypes }) {
  console.log(gearTypes);
  return (
    <>
      <div>
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
                <ul>
                  {list.map((li) => (
                    <Button li={li}>{li}</Button>
                  ))}
                </ul>
              </div>
            );
          })}
        </Container>
      </div>
    </>
  );
}

export default GearGarage;
