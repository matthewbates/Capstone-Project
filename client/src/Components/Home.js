import React, { useState } from "react";
import Search from "./Searches/HikeSearch";
import Footer from "./Footer";
// IMPORT TRAIL INFO HERE INTO BOOTSTRAP CONTAINERS SO A USER CAN QUICKLY SEARCH FOR A HIKE

function Home({ search, setter, currentUser }) {
  const [favorites, setFavorites] = useState([]);

  function renderHikeSearch(event) {
    setter(event.target.value);
  }

  return (
    <div className="home-page">
      <Footer currentUser={currentUser} />
    </div>
  );
}

export default Home;
