import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const register = require("../../controllers/registerController");

function Registration() {
  return (
    <Form>
        <Form.Group controlId="formGroupName">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="firstName" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group controlId="formGroupUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="username" placeholder="Enter Username" />
      </Form.Group>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="Enter Email Address" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Enter New Password" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword2">
        <Form.Label>Enter Password Again:</Form.Label>
        <Form.Control type="password2" placeholder="Confirm Password" />
      </Form.Group>
      <Button variant="primary" id="registerButton" onClick={() => {register} } type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Registration;
