import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Registration() {
  return (
    <Form>
        <Form.Group controlId="formGroupFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="firstName" placeholder="Enter First Name" />
      </Form.Group>
      <Form.Group controlId="formGroupLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="lastName" placeholder="Enter Last Name" />
      </Form.Group>
      <Form.Group controlId="formGroupUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter Username" />
      </Form.Group>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Registration;
