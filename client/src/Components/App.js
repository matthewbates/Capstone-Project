import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Packlist from "./Packlist";
import GearGarage from "./GearGarage";
import Map from "./Map";
import SwapShop from "./SwapShop";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [gearTypes, setGearTypes] = useState([]);
  // empty list; if we want to add something to it, use setSelectedGearTypes
  // I want to set this list of items in one component; render the list of items in a different component
  // passing setter function to gearGarage; items to packlist
  const [selectedGearTypes, setSelectedGearTypes] = useState([]);
  const [swapShop, setSwapShop] = useState([]);

  useEffect(() => {
    fetch("/swap_shops")
      .then((r) => r.json())
      .then((swapShop) => setSwapShop(swapShop));
  }, []);

  useEffect(() => {
    fetch(`/gear_types`)
      .then((r) => r.json())
      .then((gearTypes) => setGearTypes(gearTypes));
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
                Map
              </Nav.Link>
              <Nav.Link as={Link} to="/packlist">
                Packlist
              </Nav.Link>
              <Nav.Link as={Link} to="/gear_garage">
                Gear Garage
              </Nav.Link>
              <Nav.Link as={Link} to="/swap_shop">
                SwapShop
              </Nav.Link>
              <Nav.Link as={Link} to="/profile">
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
            />
          }
        ></Route>
        <Route
          path="/swap_shop"
          element={
            <SwapShop
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              swapShop={swapShop}
              setSwapShop={setSwapShop}
            />
          }
        ></Route>
        <Route path="/profile" />
        <Route
          path="/map"
          element={
            <Map currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
