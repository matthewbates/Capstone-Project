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
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { SliderData } from "./SliderData";
import { Fragment } from "react";

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
    <MDBCol>
      <MDBCard>
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

        <MDBCardBody>
          <MDBCardTitle>{name}</MDBCardTitle>

          <MDBCardText>
            <b>${price}</b> | <b>{category}</b>
          </MDBCardText>

          <MDBCardText>{description}</MDBCardText>

          <Button variant="primary">Contact Seller</Button>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default SwapShop;
