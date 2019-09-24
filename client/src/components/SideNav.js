import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import PRButton from "../components/PRButton";
import Login from "../components/Login";
import Register from "../components/Register";
import Container from "react-bootstrap/Container";
import PRModal from "../components/PRModal";

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
    this.setState({ showModal: true});
  };

  render() {
    return (
      <Row className="justify-content-center">
        <Col className="justify-content-center">
          {this.state.showModal && (
          <PRModal toggle={this.toggleModal} />
          )}
                  <h1 className="welcome">Welcome Lifter</h1>

        </Col>

        <Container className="mt-4 ">
          <Col>
            <Row
              className="justify-content-md-center bg-white"
              // style={logStyle}
            >
              <Col>
                {this.state.showLogin && (
                  <Login toggle={this.toggleLoginRegister} />
                )}
              </Col>
            </Row>
            <Row
              className="justify-content-md-center bg-white"
              // style={regStyle}
            >
              <Col className="pb-2">
                {!this.state.showLogin && (
                  <Register toggle={this.toggleLoginRegister} />
                )}
              </Col>
            </Row>
          </Col>
        </Container>
        <PRButton type="button" toggle={this.toggleModal}>
          Launch modal
        </PRButton>
      </Row>
    );
  }
}

export default SideNav;
