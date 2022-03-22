import React, { useEffect, useState } from "react";
import TrailInfoList from "./TrailInfoList";
import TrailInfo from "./TrailInfo";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const mapStyles = {
  height: "90vh",
  width: "100%",
};

function Trailheads({ id, name, lat, lng, trailInfo, setTrailInfo }) {
  const [selected, setSelected] = useState({});
  const [currentPosition, setCurrentPosition] = useState({});

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  const locations = [
    {
      id: 1,
      name: "Red Mountain",
      location: {
        lat: 38.851379,
        lng: -104.921,
      },
    },
    {
      id: 2,
      name: "Iron Mountain",
      location: {
        lat: 38.849157,
        lng: -104.913,
      },
    },
  ];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  const onSelect = (item) => {
    setSelected(item);
  };

  return (
    <div className="google_styling">
      <LoadScript googleMapsApiKey="AIzaSyD4G8pUuPzvq_CQ9wdT5eOJpGG4ywQtFsY">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={12.5}
          center={currentPosition}
        >
          {locations.map((item) => {
            return (
              <Marker
                key={item.name}
                position={item.location}
                currentPostition={currentPosition}
                onClick={() => onSelect(item)}
              />
            );
          })}
          {selected.location && (
            <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <div>
                <b>{selected.name}</b>{" "}
                <Button
                  className="mx-auto"
                  as={Link}
                  // onClick={() => setTrailInfo(id)}
                  to={`/trail_info_list/${selected.id}`}
                >
                  View Information
                </Button>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Trailheads;
