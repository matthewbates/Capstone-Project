import React from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";

function Weather({ weather }) {
  if (weather === null) {
    return <h2>Loading...</h2>;
  }

  console.log(weather)

  const kelvin = weather.main.temp;
  const far = Math.round(((kelvin - 273.15) * 9) / 5 + 32);

  return (
    <MDBContainer>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle></MDBCardTitle>
          <MDBCardText>
            <p>Current Temp: {far} ℉</p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Weather;
