import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Login from "../components/Login";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import API from "../utils/API";
import Form from "react-bootstrap/Form";

import "./styles/style.css";

class SideNav extends Component {
  constructor() {
    super();
    this.state = {
      hideLogin: false,
      hideRegister: true,
      name: "",
      username: "",
      email: "",
      password: "",
      password2: ""
    };

    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleRegisterChange = this.handleRegisterChange.bind(this);

    this.loginInstance = (
      <Button
        className="m-2"
        variant="primary"
        type="register"
        onClick={this.handleLoginChange}
      >
        Register
      </Button>
    );

    this.registerInstance = (
      <Button
        variant="primary"
        id="registerButton"
        onClick={this.handleRegisterChange}
      >
        Submit
      </Button>
    );
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleLoginChange(event) {
    event.preventDefault();
    this.setState({ hideLogin: true, hideRegister: false });
  }

  handleRegisterChange(event) {
    event.preventDefault();
    this.setState({ hideLogin: false, hideRegister: true });
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

  render() {
    const logStyle = this.state.hideLogin ? { display: "none" } : {};
    const regStyle = this.state.hideRegister ? { display: "none" } : {};
    return (
      <Row className="justify-content-center">
        <h1 className="red">Welcome Lifter</h1>
        <Container className="mt-4 ">
          <Col>
            <Row
              className="justify-content-md-center bg-white"
              style={logStyle}
            >
              <Col>
                <Login />
                <div className="Login">{this.loginInstance}</div>
              </Col>
            </Row>
            <Row
              className="justify-content-md-center bg-white"
              style={regStyle}
            >
              <Col className="pb-2">
                <Form>
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
                  <div className="Login">{this.registerInstance}</div>
                </Form>
              </Col>
            </Row>
          </Col>
        </Container>
      </Row>
    );
  }
}

export default SideNav;
