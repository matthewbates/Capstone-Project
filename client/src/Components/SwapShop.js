import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function SwapShop({ id, name, image, price, description, catagory }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <Card.Text>
              <b>${price}</b> | {catagory}
            </Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary">Contact Seller</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default SwapShop;
