import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  const [currentUser, setCurrentUser] = useState("");

  function handleLogout(event) {
    fetch("/logout", {
      method: "DELETE",
    }).then(setCurrentUser());
  }

  // useEffect(() => {
  //   const data = localStorage.getItem("user-data");
  //   if (data) {
  //     setCurrentUser(JSON.parse(data));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("user-data", JSON.stringify(currentUser));
  // });

  return (
    <BrowserRouter>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container fluid className="mx-3 align-items-center me-auto">
          {/* input Navbar image after MVP */}
          <Navbar.Brand as={Link} to="/home">
            {/* add className after MVP */}
            <h3>
              🏔
              {currentUser ? `Welcome, ${currentUser.username}!` : ""}
            </h3>
          </Navbar.Brand>
          <div>
            <Navbar>
              <Nav.Link as={Link} to="/garage_sale">
                Checklist
              </Nav.Link>
              <Nav.Link as={Link} to="/checklist">
                Garage Sale
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
            <Login setCurrentUser={setCurrentUser} currentUser={currentUser} />
          }
        />
        <Route path="/checklist" />
        <Route path="/garage_sale" />
        <Route path="/profile" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
