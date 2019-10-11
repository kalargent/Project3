import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./styles/style.css";
import API from "../utils/API";
import Form from 'react-bootstrap/Form';

class EditModal extends Component {
  state = {
    liftID: this.props.id, 
    liftName: this.props.liftName,
    reps:  this.props.reps,
    pr:  this.props.pr,
    show: false
  }

  handleClose = () => {
    this.props.onToggle(false)
  }

  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    var newLift = {
      liftName: this.state.liftName,
      reps: this.state.reps,
      pr: this.state.pr,
      };
    API.updateLift(newLift)
    .then (() =>  { 
      this.props.onToggle(false); 
      window.location.reload(); 
    })
  }

  static getDerivedStateFromProps = (props, state) => {
    console.log(props, state)
    return {show: props.show}

  }

  render() {
    return (
      <Modal 
      onSubmit={this.handleSubmit} show={this.state.show} onHide={this.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Lift</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form.Group controlId="formGroupLiftName">
        <Form.Label>Lift Name:</Form.Label>
        <Form.Control
          type="name"
          placeholder= {this.state.liftName}
          defaultValue={this.state.liftName}
          onChange={this.handleInputChange}
          name="liftName"
        />
      </Form.Group>
      <Form.Group controlId="formGroupReps">
        <Form.Label>Reps:</Form.Label>
        <Form.Control
          type="reps"
          placeholder={this.state.reps}
          defaultValue={this.state.reps}
          onChange={this.handleInputChange}
          name="reps"
        />
      </Form.Group>
      <Form.Group controlId="formGroupPR">
        <Form.Label>Personal Record:</Form.Label>
        <Form.Control
          type="record"
          placeholder={this.state.pr}
          defaultValue={this.state.pr}
          onChange={this.handleInputChange}
          name="pr"
        />
      </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" 
          onClick={this.handleClose} 
          >Close</Button>
          <Button variant="primary" type="submit" 
          onClick={this.handleClose, this.handleSubmit}
          // onSubmit={this.handleSubmit}
          >Save changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default EditModal;
