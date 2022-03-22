import React, { useState } from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { SliderData } from "./SliderData";

function SwapShop({
  id,
  name,
  image_one,
  image_two,
  image_three,
  price,
  description,
  category,
}) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={image_one} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image_two} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image_three}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <Card.Body>
          <Card.Title>{name}</Card.Title>

          <Card.Text>
            <b>${price}</b> | <b>{category}</b>
          </Card.Text>

          <Card.Text>{description}</Card.Text>

          <Button variant="primary">Contact Seller</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default SwapShop;
