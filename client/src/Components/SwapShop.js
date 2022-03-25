import React, { useState } from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
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
      <Col>
        {/* <Col sm={12} md={12} lg={6} className="gap-3 mb-5 mt-5"> */}
        <Card style={{ width: "20rem" }}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image_one}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image_two}
                alt="Second slide"
              />
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
      </Col>
    </>
  );
}

export default SwapShop;
