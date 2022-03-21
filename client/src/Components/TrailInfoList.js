import React, { useState } from "react";
import Trailheads from "./Trailheads";
import TrailInfo from "./TrailInfo";

function TrailInfoList({ trailInfo, setTrailInfo }) {
  return (
    <>
      <div>
        {trailInfo.map((info) => (
          <TrailInfo
            key={info.id}
            id={info.id}
            name={info.trail_name}
            out_and_back={info.out_and_back}
            loop={info.loop}
            difficulty={info.difficulty}
            length={info.total_length}
            elevation={info.elevation_profile}
            dogs={info.allows_dogs}
            bikes={info.allows_bikes}
            lat={info.lat}
            lng={info.lng}
          />
        ))}
      </div>
    </>
  );
}

export default TrailInfoList;
