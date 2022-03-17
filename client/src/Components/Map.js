import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const mapStyles = {
  height: "100vh",
  width: "100%",
};

function MapContainer() {
  const [selected, setSelected] = useState({});
  const [currentPosition, setCurrentPosition] = useState({});

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

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
          zoom={14.5}
          center={currentPosition}
        >
          {/* {locations.map((item) => {
            return (
              <Marker
                key={item.name}
                position={item.location}
                currentPostition={currentPosition}
                onClick={() => onSelect(item)}
              />
            );
          })} */}
          {selected.location && (
            <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            ></InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapContainer;
