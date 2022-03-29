import React, { useState, useEffect } from "react";
import Trailheads from "./Trailheads";
import TrailInfo from "./TrailInfo";
import { useParams } from "react-router-dom";
import { MDBSpinner, MDBBtn } from "mdb-react-ui-kit";

function TrailInfoList({ trailInfo, setTrailInfo }) {
  const [hike, setHike] = useState([]);

  // the variable of id is set to a particular hike instance
  const { id } = useParams();
  useEffect(() => {
    fetch(`/hikes/${id}`)
      .then((r) => r.json())
      .then((hike) => setHike(hike));
  }, []);
  if (hike.length === 0) {
    return (
      <MDBBtn className="center-loading-spinner" disabled>
        <MDBSpinner size="sm" role="status" tag="span" className="me-2" />
        Loading...
      </MDBBtn>
    );
  }

  return (
    <>
      <div>
        <TrailInfo
          key={hike.id}
          id={hike.id}
          name={hike.trail_name}
          image={hike.image}
          out_and_back={hike.out_and_back}
          loop={hike.loop}
          difficulty={hike.difficulty}
          length={hike.total_length}
          elevation={hike.elevation_profile}
          dogs={hike.allows_dogs}
          bikes={hike.allows_bikes}
        />
      </div>
    </>
  );
}

export default TrailInfoList;
