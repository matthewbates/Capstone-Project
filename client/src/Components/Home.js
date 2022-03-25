import React, { useState } from "react";
import Search from "./Searches/HikeSearch";
import Footer from "./Footer Info/Footer";
// IMPORT TRAIL INFO HERE INTO BOOTSTRAP CONTAINERS SO A USER CAN QUICKLY SEARCH FOR A HIKE

function Home({ search, setter }) {
  const [favorites, setFavorites] = useState([]);

  function renderHikeSearch(event) {
    setter(event.target.value);
  }

  return (
    <div className="hello">
      <h1>Hello, this is the home page</h1>
      {/* on the home page, return the trail info component so a user can search for a hike quickly */}
      <p>quickly search for hikes in your area</p>
      <input value={search} placeholder="Search for a hike here"></input>
      <Footer />
    </div>
  );
}

export default Home;
