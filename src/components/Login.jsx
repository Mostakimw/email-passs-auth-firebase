import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import app from "../firebase/firebase.config";

const Login = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPass(event.target.value);
  };
  const handleReloadForm = (e) => {
    e.preventDefault();
  };

  const handlerLoginBtn = () => {
    setSuccess("");
    setError("");
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        console.log(userCredential.user);
        setSuccess("successfully Login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError("Email or Password dont match");
      });
  };
  return (
    <div className="container mt-5">
      <h3 className="text-success text-center">{success}</h3>
      <h3 className="text-danger text-center">{error}</h3>
      <Form onSubmit={handleReloadForm} className="w-50 mx-auto">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleEmailChange}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="mt-3">Password</Form.Label>
          <Form.Control
            onChange={handlePasswordChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button
          onClick={handlerLoginBtn}
          className="my-3"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      <p className="text-center">
        <small>
          New to this website? Please <Link to="/register">Register</Link>
        </small>
      </p>
    </div>
  );
};

export default Login;
