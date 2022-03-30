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
  MDBCarousel,
  MDBCarouselInner,
  MDBAccordion,
  MDBAccordionItem,
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
      <MDBCard className="d-flex align-items-stretch">
        <MDBCarousel showControls interval="25000">
          <MDBCarouselInner data-interval="false">
            <MDBCarouselItem className="active">
              <MDBCarouselElement
                className="image-one-size"
                src={image_one}
                alt="..."
              />
            </MDBCarouselItem>
            <MDBCarouselItem>
              <MDBCarouselElement
                className="image-two-size"
                src={image_two}
                alt="..."
              />
            </MDBCarouselItem>
            <MDBCarouselItem>
              <MDBCarouselElement
                className="image-three-size"
                src={image_three}
                alt="..."
              />
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
        <MDBAccordion className="d-flex" initialActive={0}>
          <MDBAccordionItem collapseId={1} headerTitle={name}>
            <MDBCardBody>
              <MDBCardTitle>{name}</MDBCardTitle>

              <MDBCardText>
                <b>${price}</b> | <b>{category}</b>
              </MDBCardText>

              <MDBCardText>{description}</MDBCardText>
            </MDBCardBody>
          </MDBAccordionItem>
        </MDBAccordion>
      </MDBCard>
    </MDBCol>
  );
}

{
  /* <Carousel>
  <Carousel.Item>
    <img className="d-block w-100" src={image_one} alt="First slide" />
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={image_two} alt="Second slide" />
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={image_three} alt="Third slide" />
  </Carousel.Item>
</Carousel>; */
}

export default SwapShop;
