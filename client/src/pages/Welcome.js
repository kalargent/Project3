import React from "react";
import Login from "../components/Login";
import Registration from "../components/Registration";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import register from "../registerServiceWorker";

function Welcome() {
  return (

    // When page loads login should display and registration should be hidden
    // When user clicks register, login should hide and registration should become visible
    // reverse process when user clicks submit on registration form

    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Login />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Registration />
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;
