import React, { useState } from "react";
import Footer from "./Footer";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";
import { Fragment } from "react";

function Home({ search, setter, currentUser }) {

  return (
    <>
      <MDBCarousel interval={6000} className="carousel-styling">
        <MDBCarouselInner fade>
          <MDBCarouselItem className="active">
            <MDBCarouselElement
              src="https://www.14ers.com/photos/wilsongroup/peakphotos/large/201603_MtWil01.jpg"
              alt="first slide"
            />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://www.14ers.com/photos/crestonegroup/peakphotos/large/201003_Humb01.jpg"
              alt="second slide"
            />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://www.14ers.com/photos/pikespeak/peakphotos/large/201506_Pikes01.jpg"
              alt="third slide"
            />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://www.14ers.com/photos/mtholycross/peakphotos/large/200706_Holy01.jpg"
              alt="fourth slide"
            />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://www.14ers.com/photos/maroongroup/peakphotos/large/200807_Pyra01.jpg"
              alt="fifth slide"
            />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://www.14ers.com/photos/kitcarsongroup/peakphotos/large/201107_kitcar01.jpg"
              alt="sixth slide"
            />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://www.14ers.com/photos/mtyale/peakphotos/large/201004_Yale02.jpg"
              alt="seventh slide"
            />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://www.14ers.com/photos/mtelbert/peakphotos/large/200410_Elbert01.jpg"
              alt="eighth slide"
            />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://www.14ers.com/photos/wilsongroup/peakphotos/large/201603_MtWil01.jpg"
              alt="ninth slide"
            />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://www.14ers.com/photos/redcloudgroup/peakphotos/large/200606_Sun01.jpg"
              alt="tenth slide"
            />
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      <Footer />
    </>
  );
}

export default Home;
