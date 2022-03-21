import React, { useState, useEffect } from "react";


function AllTrails() {
  const [hikes, setHikes] = useState([]);

  useEffect(() => {
    fetch("/hikes")
      .then((response) => response.json())
      .then(console.log);
  }, []);

  

  console.log(locations);

  return (
    <div>
      <Trailheads locations={locations} />
    </div>
  );
}

export default AllTrails;
