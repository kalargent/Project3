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

  onToggleModal = (state) => {
    this.setState({ showModal: state});
  };

  render() {
    return (
      <Row className="justify-content-center">
        <Col>
          {
            //this.state.showModal &&
          <PRModal show={this.state.showModal} onToggle={this.onToggleModal} />
          }
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
        <PRButton type="button" toggle={this.onToggleModal}>
          Launch modal
        </PRButton>
      </Row>
    );
  }
}

export default SideNav;
