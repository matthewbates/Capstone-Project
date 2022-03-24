import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BrowserRouter, Navigate, Link, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Packlist from "./Packlist";
import GearGarage from "./GearGarage";
import Trailheads from "./Trailheads";
import TrailInfoList from "./TrailInfoList";
import SwapShopList from "./SwapShopList";
import UserPage from "./Auth/UserPage";
import Home from "./Home";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [gearTypes, setGearTypes] = useState([]);
  const [selectedGearTypes, setSelectedGearTypes] = useState([]);
  const [selectedFavorites, setSelectedFavorites] = useState("");
  const [swapShop, setSwapShop] = useState([]);
  const [search, setSearch] = useState("");
  const [trailInfo, setTrailInfo] = useState([]);
  const [catSearch, setCatSearch] = useState("");
  const [priceSearch, setPriceSearch] = useState("");
  const [hikeSearch, setHikeSearch] = useState("");

  useEffect(() => {
    fetch("/swap_shops")
      .then((r) => r.json())
      .then((swapShop) => setSwapShop(swapShop));
  }, []);

  const deletePackListItem = (id) => {
    const updatedPackList = selectedGearTypes.filter((gear) => gear.id !== id);
    setSelectedGearTypes(updatedPackList);
  };

  useEffect(() => {
    fetch(`/gear_types`)
      .then((r) => r.json())
      .then((gearTypes) => setGearTypes(gearTypes));
  }, []);

  useEffect(() => {
    fetch("/hikes")
      .then((response) => response.json())
      .then((trailInfo) => setTrailInfo(trailInfo));
  }, []);

  // currentUser is added to local storage to persist on page refresh
  useEffect(() => {
    const data = localStorage.getItem("user-data");
    if (data) {
      setCurrentUser(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user-data", JSON.stringify(currentUser));
  });

  function handleLogout(event) {
    fetch("/logout", {
      method: "DELETE",
    }).then(setCurrentUser());
  }

  return (
    <BrowserRouter>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container fluid className="mx-3 align-items-center me-auto">
          {/* input Navbar image after MVP */}
          <Navbar.Brand as={Link} to="/home">
            {/* add className after MVP */}
            <h3>🏔 {currentUser ? `Welcome, ${currentUser.username}!` : ""}</h3>
          </Navbar.Brand>
          <div>
            <Navbar>
              <Nav.Link as={Link} to="/map">
                Trailheads
              </Nav.Link>
              <Nav.Link as={Link} to="/packlist">
                Packlist
              </Nav.Link>
              <Nav.Link as={Link} to="/gear_garage">
                Gear Garage
              </Nav.Link>
              <Nav.Link as={Link} to="/swap_shop_list">
                Swap/Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/userpage">
                Profile
              </Nav.Link>
              <div>
                {!currentUser ? (
                  <Button as={Link} to="/">
                    Login
                  </Button>
                ) : (
                  <Button onClick={handleLogout} as={Link} to="/">
                    Log out
                  </Button>
                )}
              </div>
            </Navbar>
          </div>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        ></Route>

        <Route
          path="/packlist"
          element={
            <Packlist
              selectedGearTypes={selectedGearTypes}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              deleteGear={deletePackListItem}
            />
          }
        ></Route>

        <Route
          path="/gear_garage"
          element={
            <GearGarage
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              gearTypes={gearTypes}
              // handles the select onClick
              handleSelect={setSelectedGearTypes}
              catSearch={catSearch}
              catSetter={setCatSearch}
              priceSearch={priceSearch}
              priceSetter={setPriceSearch}
            />
          }
        ></Route>
        <Route
          path="/swap_shop_list"
          element={
            <SwapShopList
              currentUser={currentUser}
              swapShop={swapShop}
              setSwap={setSwapShop}
              search={search}
              setter={setSearch}
              catSearch={catSearch}
              catSetter={setCatSearch}
            />
          }
        ></Route>
        <Route
          path="/userpage"
          element={
            <UserPage
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path="/map"
          element={
            <Trailheads
              currentUser={currentUser}
              trailInfo={trailInfo}
              setTrailInfo={setTrailInfo}
              handleSelect={setSelectedFavorites}
            />
          }
        />
        <Route
          path="/trail_info_list/:id"
          element={
            <TrailInfoList
              currentUser={currentUser}
              trailInfo={trailInfo}
              setTrailInfo={setTrailInfo}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home
              currentUser={currentUser}
              search={hikeSearch}
              setter={setHikeSearch}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
