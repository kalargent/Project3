import React, { Component } from "react";
import Row from "react-bootstrap/Row";
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
      showRegister: false,
      showModal: false,
      showTable: false,
      hideLogin: false
    };
  }

  toggleLogin = (showLogin = true) => {
    this.setState({ showLogin });
    console.log("showLogin state: "+this.state.showLogin)
  };

  toggleRegister = (showRegister = false) => {
    this.setState({ showRegister });
    console.log("showLogin state: "+this.state.showRegister)
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
              className="justify-content-md-center text-white"
              // style={logStyle}
            >
              <Col >
                {this.state.showLogin && (
                  <Login toggleLogin={this.toggleLogin} toggleRegister={this.toggleRegister} changeLoginState={this.props.changeLoginState} />
                )}
              </Col>
            </Row>
            <Row
              className="justify-content-md-center text-white"
              // style={regStyle}
            >
              <Col className="pb-2">
                {this.state.showRegister && (
                  <Register toggleLogin={this.toggleLogin} toggleRegister={this.toggleRegister}/>
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
