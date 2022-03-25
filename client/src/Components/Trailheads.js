import React, { useEffect, useState } from "react";
import TrailInfoList from "./TrailInfoList";
import TrailInfo from "./TrailInfo";
import { Link } from "react-router-dom";
import { Button, CloseButton, Spinner } from "react-bootstrap";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const mapStyles = {
  height: "85vh",
  width: "100%",
};

function Trailheads({
  id,
  name,
  lat,
  lng,
  trailInfo,
  setTrailInfo,
  handleSelect,
}) {
  const [selected, setSelected] = useState({});
  const [currentPosition, setCurrentPosition] = useState({});
  const [done, setDone] = useState(undefined);

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
    {
      id: 3,
      name: "Manitou Incline",
      location: {
        lat: 38.856813,
        lng: -104.932,
      },
    },
    {
      id: 4,
      name: "Barr Trail (To Pikes Peak)",
      location: {
        lat: 38.855787,
        lng: -104.934,
      },
    },
    {
      id: 5,
      name: "Lower To Upper Columbine Trail",
      location: {
        lat: 38.791414,
        lng: -104.866,
      },
    },
    {
      id: 6,
      name: "Mount Muscoco",
      location: {
        lat: 38.785557,
        lng: -104.889,
      },
    },
    {
      id: 7,
      name: "Mount Cutler",
      location: {
        lat: 38.787769,
        lng: -104.877,
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
    <div>
      <div className="google-styling">
        <LoadScript googleMapsApiKey="AIzaSyD4G8pUuPzvq_CQ9wdT5eOJpGG4ywQtFsY">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={11.5}
            center={currentPosition}
          >
            {locations.map((item) => {
              return (
                <Marker
                  key={item.name}
                  position={item.location}
                  currentPostition={currentPosition}
                  icon={{
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                  }}
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
                  <b>{selected.name}</b> <br />
                  <Button
                    size="sm"
                    className="mx-auto"
                    as={Link}
                    to={`/trail_info_list/${selected.id}`}
                  >
                    Details
                  </Button>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default Trailheads;
