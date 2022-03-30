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

  const kelvinTemp = weather.main.temp;
  const kelvinFeelsLike = weather.main.feels_like;
  const kelvinMin = weather.main.temp_min;
  const kelvinMax = weather.main.temp_max;
  const farTemp = Math.round(((kelvinTemp - 273.15) * 9) / 5 + 32);
  const farFeelsLike = Math.round(((kelvinFeelsLike - 273.15) * 9) / 5 + 32);
  const farMin = Math.round(((kelvinMin - 273.15) * 9) / 5 + 32);
  const farMax = Math.round(((kelvinMax - 273.15) * 9) / 5 + 32);

  return (
    <MDBContainer>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle></MDBCardTitle>
          <MDBCardText>
            <div>
              <img
                src={`../weather-icons/${weather.weather[0].icon}.png`}
              ></img>
            </div>
            <p className="d-flex justify-content-center ">
              <b>{weather.weather[0].description.toUpperCase()}</b>
            </p>
            <p>
              <b>Current Temp: {farTemp}℉</b>
            </p>
            <p>
              <b>Feels Like: {farFeelsLike}℉</b>
            </p>
            <p>
              <b>
                Low: {farMin}℉ ⎯ High: {farMax}℉
              </b>
            </p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Weather;
