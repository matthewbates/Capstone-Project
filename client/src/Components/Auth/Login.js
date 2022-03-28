import React, { useState } from "react";
import { Form, Button, Container, Input } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

function Login({ setCurrentUser, currentUser }) {
  // Login state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Submit login credentials to db

  function handleLogin(e) {
    //assign login to for values stored in state | then post req
    let login = {
      username,
      password,
    };
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.username) {
          //if success setCurrentUser to response
          setCurrentUser(res);
        } else {
          //if fail alert errors
          alert(res.error);
        }
      });
  }

  return (
    <div className="body-of-form">
      {/* Ternary used to verify currentUser | true navigates to home / false null */}
      {currentUser ? <Navigate to="/home" /> : null}
      <Container>
        <div className="pt-5">
          <Form className="login-inner outer">
            <br></br>
            <h2>Welcome Back!</h2>
            {/* user log in form */}
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Control
                onChange={(e) => setUsername(e.target.value)}
                type="username"
                value={username}
                placeholder="User Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                placeholder="Password"
              />
            </Form.Group>
            <div className="form-check">
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="customCheck1"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Remember Me
                </label>
              </div>
            </div>
            <Button onClick={handleLogin} variant="primary" to="/login">
              Log In
            </Button>
            <br />
            <div>
              <Link to="/signup">Not registered? It's free!</Link>
            </div>
            <div>
              Forgot <Link to="/password_reset">Password?</Link>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Login;
