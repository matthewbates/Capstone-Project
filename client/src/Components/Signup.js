import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { Navigate, Link } from "react-router-dom";

function Signup({ currentUser, setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSignup(e) {
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.username) {
          setCurrentUser(response);
        } else {
          alert(response.errors);
          setCurrentUser();
        }
      });
  }
  return (
    <div className="body_of_form">
      {currentUser ? <Navigate to="/home" /> : null}
      <Container>
        <div>
          <Form>
            <br />
            <h2>Create an Account!</h2>
            <Form.Control
              onChange={(e) => setUsername(e.target.value)}
              type="username"
              placeholder="Username"
            ></Form.Control>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            ></Form.Control>
            <Form.Control
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              type="password"
              placeholder="Password Confirmation"
            ></Form.Control>
            <Button onClick={handleSignup}>Create Account</Button>
            <div>
              Already have an account? <Link to="/">Log in</Link>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
