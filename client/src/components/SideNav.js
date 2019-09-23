import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import PRModal from "../components/PRModal";
import Login from "../components/Login";
import Register from "../components/Register";
import Container from "react-bootstrap/Container";
import "./styles/style.css";

class SideNav extends Component {
  constructor() {
    super();
    this.state = {
      showLogin: true,
      showModal: false
    };
  }

  toggleLoginRegister = (showLogin = true) => {
    this.setState({ showLogin });
  };

  toggleModal = (showModal = false) => {
    this.setState({ showModal });
  };

  render() {
    return (
     
      <Row className="justify-content-center">
        <Col>{this.state.toggleModal} && 
        <PRModal toggle={this.toggleModal}/></Col>
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
      <Button onClick={() => this.toggleModal(true)}>Add a New PR!</Button>
    </Row>
    );
  }
}

export default SideNav;
