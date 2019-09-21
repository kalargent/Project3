import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { Component } from "react";

class Login extends Component {
  
  render () {
    return (
    <Form>
      <Form.Group controlId="formGroupUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="Username" placeholder="Enter Username" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button className="m-2" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
  };
  

}



export default Login;
