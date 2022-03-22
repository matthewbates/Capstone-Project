import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import GoogleLogin from "react-google-login";

function Login({ setCurrentUser, currentUser }) {
  // Login state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Submit login credentials to db

  function handleReset() {
    return setUsername(""), setPassword("");
  }

  const responseGoogle = (response) => {
    console.log(response);
  };

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

  // const handleFailure = (result) => {
  //   alert(result);
  // };

  // const handleLoginWithGoogle = (googleData) => {
  //   console.log(googleData);
  // };

  return (
    <div className="body_of_form">
      {/* Ternary used to verify currentUser | true navigates to home / false null */}
      {currentUser ? <Navigate to="/home" /> : null}
      <Container>
        <div className="pt-5">
          <Form className="outer inner">
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
            <Button onClick={handleLogin} variant="primary" to="/login">
              Log In
            </Button>{" "}
            <Button onClick={handleReset}>Reset</Button>
            <br />
            {/* style this so it is next to the log in button after MVP */}
            {/* add classname for styling, too */}
            <div>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </div>
            {/* <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Log in with Google"
              onSuccess={handleLoginWithGoogle}
              onFailure={handleFailure}
              cookiePolicy={"single_host_origin"}
            ></GoogleLogin> */}
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Login;
