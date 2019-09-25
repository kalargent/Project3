import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { Component } from "react";
import API from "../utils/API";

class Login extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    password2: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleSubmit = (event) => {
    // const token = serverResult;
    event.preventDefault();
    var newUser = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    API.postRegister(newUser);
    console.log(newUser);    
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
      <Form.Group controlId="formGroupName">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter Name"
          value={this.state.name}
          onChange={this.handleInputChange}
          name="name"
        />
      </Form.Group>
      <Form.Group controlId="formGroupUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="username"
          placeholder="Enter Username"
          value={this.state.username}
          onChange={this.handleInputChange}
          name="username"
        />
      </Form.Group>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Email Address"
          value={this.state.email}
          onChange={this.handleInputChange}
          name="email"
        />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter New Password"
          value={this.state.password}
          onChange={this.handleInputChange}
          name="password"
        />
      </Form.Group>
      <Form.Group controlId="formGroupPassword2">
        <Form.Label>Enter Password Again:</Form.Label>
        <Form.Control
          type="password2"
          placeholder="Confirm Password"
          value={this.state.password2}
          onChange={this.handleInputChange}
          name="password2"
        />
      </Form.Group>
      <Button className="m-2" variant="danger" id="button" type="submit">
    Register
    </Button>
      <Button className="m-2" variant="danger" id="button" onClick={this.props.toggle}>
    Login
    </Button>
    </Form>
    )
  };
  

}



export default Login;
