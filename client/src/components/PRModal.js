import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Login from "./Login";
import Register from "./Register";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./styles/style.css";
import API from "../utils/API";
import Form from 'react-bootstrap/Form';



const handleClose = () => show(false);
const show = () => setShow(true);
const setShow = () => show

class PRModal extends Component {
  state = {
    liftName: "",
    reps: "",
    pr: "",
    date: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    // const token = serverResult;
    event.preventDefault();
    var newLift = {
      liftName: this.state.liftName,
      reps: this.state.reps,
      pr: this.state.pr,
      date: this.state.date
      };
    API.postliftModel(newLift);
    console.log(newLift);    
  }


  render() {
    return (
      <Modal 
      onSubmit={this.handleSubmit} show={show} onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Lift</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form.Group controlId="formGroupLiftName">
        <Form.Label>Lift Name:</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter Lift"
          value={this.state.liftName}
          onChange={this.handleInputChange}
          name="Lift Name"
        />
      </Form.Group>
      <Form.Group controlId="formGroupReps">
        <Form.Label>Reps:</Form.Label>
        <Form.Control
          type="reps"
          placeholder="Enter Reps"
          value={this.state.reps}
          onChange={this.handleInputChange}
          name="reps"
        />
      </Form.Group>
      <Form.Group controlId="formGroupPR">
        <Form.Label>Personal Record:</Form.Label>
        <Form.Control
          type="record"
          placeholder="Enter PR"
          value={this.state.pr}
          onChange={this.handleInputChange}
          name="pr"
        />
      </Form.Group>
      <Form.Group controlId="formGroupDate">
        <Form.Label>Date:</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter Date"
          value={this.state.date}
          onChange={this.handleInputChange}
          name="date"
        />
      </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" 
          onClick={this.handleClose}
          >Close</Button>
          <Button variant="primary" 
          onClick={handleClose}
          >Save changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default PRModal;
