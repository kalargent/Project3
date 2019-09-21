import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Login from "../components/Login";
import Register from "../components/Register";
import Container from "react-bootstrap/Container";
import "./styles/style.css";

class SideNav extends Component {
  constructor() {
    super();
    this.state = {
      showLogin: true
    };
  }

  toggleLoginRegister = (showLogin = true) => {
    this.setState({ showLogin });
  };

  render() {
    return (
     
      <Row className="justify-content-center">
      <h1 className="red">Welcome Lifter</h1>
      <Container className="mt-4 ">
        <Col>
          <Row
            className="justify-content-md-center bg-white"
            // style={logStyle}
          >
            <Col>
              {this.state.showLogin &&
        <Login
          toggle={this.toggleLoginRegister}
        />
      }
            </Col>
          </Row>
          <Row
            className="justify-content-md-center bg-white"
            // style={regStyle}
          >
            <Col className="pb-2">
              {!this.state.showLogin &&
        <Register
          toggle={this.toggleLoginRegister}
        />
      }
            </Col>
          </Row>
        </Col>
      </Container>
    </Row>
    );
  }
}

export default SideNav;
