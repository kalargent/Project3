import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Login from "../components/Login";
import PRModal from "../components/PRModal";
import Register from "../components/Register";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import "./styles/style.css";

class DataDisplay extends Component {
  
  render() {
    return (
      <Container>
        <PRModal/>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Lift Name</th>
      <th>Reps</th>
      <th>PR</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>props.whatever</td>
      <td>props.whatever</td>
      <td>props.whatever</td>
      <td>props.whatever</td>
    </tr>
    <tr>
      <td>props.whatever</td>
      <td>props.whatever</td>
      <td>props.whatever</td>
      <td>props.whatever</td>
    </tr>
  </tbody>
</Table>
      </Container>
    );
  }
}

export default DataDisplay;
