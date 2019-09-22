import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Login from "../components/Login";
import PRModal from "../components/PRModal";
import Register from "../components/Register";
import Container from "react-bootstrap/Container";
import "./styles/style.css";

class DataDisplay extends Component {
  
  render() {
    return (
      <Container>
        <PRModal/>
        <Col className="bg-white justify-content-md-center">
          <Row fluid className="bg-white justify-content-md-center">
            <h1 className="p-4">Lift Name:  </h1>
            <h1 className="p-4">Reps: </h1>
            <h1 className="p-4">PR: </h1>
            <h1 className="p-4">Date: </h1>
          </Row>
        </Col>
      </Container>
    );
  }
}

export default DataDisplay;
