import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Login from "../components/Login";
import Registration from "../components/Registration";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

import "./styles/style.css"

class SideNav extends Component {
  constructor() {
    super();
    this.state = {
      hideLogin: false,
      hideRegister: true
    };
  
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleRegisterChange = this.handleRegisterChange.bind(this);
  
    this.loginInstance = (
        <Button className="m-2" variant="primary" type="register" onClick={this.handleLoginChange}>
        Register
      </Button>
    )

    this.registerInstance = (
      <Button variant="primary" id="registerButton" onClick={this.register, this.handleRegisterChange}>Submit</Button>
  )
  
  }
  
  handleLoginChange(event) {
    event.preventDefault();
    this.setState({ hideLogin: true, hideRegister: false });
  }

  handleRegisterChange(event) {
    event.preventDefault();
    this.setState({ hideLogin: false, hideRegister: true });
  }

  render () {
    const logStyle = this.state.hideLogin ? {display: 'none'} : {};
    const regStyle = this.state.hideRegister ? {display: 'none'} : {};
    return (
      <Row className="justify-content-center">
        <h1 className="red">Welcome Lifter</h1>
        <Container className="mt-4 ">
              <Col >
                <Row className="justify-content-md-center bg-white" style={logStyle}>
                  <Col>
                    <Login/>
                    <div className="Login">{this.loginInstance}</div>
                  </Col>
                </Row>
                <Row className="justify-content-md-center bg-white" style={regStyle}>
                  <Col className="pb-2">
                    <Registration />
                    <div className="Login">{this.registerInstance}</div>
                  </Col>
                </Row>
              </Col>
            </Container>
      </Row>
    );
  }
  

}

export default SideNav;
