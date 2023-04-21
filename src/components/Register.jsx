import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";
import { Link } from "react-router-dom";
const Register = () => {
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [success, setSuccess] = useState("");

  const handlerRegister = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setSuccess("Register Success");
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <Form className="w-50 mx-auto">
        <h3 className="text-success">{success}</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => {
              setPass(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button onClick={handlerRegister} variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p className="text-center">
        <small>
          Already registered? Please <Link to="/login">Login</Link>
        </small>
      </p>
    </div>
  );
};

export default Register;
