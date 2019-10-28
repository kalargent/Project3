import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./styles/style.css";
import API from "../utils/API";
import Form from "react-bootstrap/Form";

class EditModal extends Component {
  state = {
    liftID: this.props.id,
    liftName: this.props.liftName,
    reps: this.props.reps,
    pr: this.props.pr,
    show: false,
    currentWeight: [], 
    barWeight: 0, 
    weightSum: 0
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let newLift = {
      liftName: this.state.liftName,
      reps: this.state.reps,
      pr: this.state.pr
    };
    let liftID = this.state.liftID;
    console.log("this is the new lift " + newLift);
    API.editLift(liftID, newLift).then(() => {
      this.props.toggle(false);
      window.location.reload();
    });
  };

  // handleButtonClicked = (event) => {
  //   console.log("Button click " + event.currentTarget.value)
  //   var addedWeight = parseInt(event.currentTarget.value)
  //   console.log(addedWeight)
  //   this.setState({
  //     currentWeight: this.state.currentWeight + addedWeight,
  //     message: 'Button ${event.currentTarget.value} clicked'
  //   })
  //   console.log(this.state.currentWeight)
  // }

  onAddItem = event => {
    var addedWeight = parseInt(event.currentTarget.value);
    console.log(addedWeight);
    this.setState(state => {
      let currentWeight = this.state.currentWeight.concat(addedWeight);
      console.log(this.state.currentWeight, " <-- current weight state");
      let add = (a, b) => a + b;
      let weightSum = currentWeight.reduce(add);
      console.log("Weight Sum ", weightSum);

      return {
        currentWeight,
        weightSum
      };
    });
  };

  removeLast = event => {
    
    // if (this.state.currentWeight.length > 1) {
    // this.state.currentWeight.pop();
  
    this.setState(state => {
      let currentWeight = []; 
      if (this.state.currentWeight.length >1){
        currentWeight = this.state.currentWeight.slice(0, -1);
          
      } 
      console.log("new current weight is ", currentWeight);
     
      let add = (a, b) => a + b;
      let weightSum = currentWeight.reduce(add, 0);
      console.log("Weight Sum ", weightSum);

      return {
        currentWeight,
        weightSum
      };
    });
  // }
  // else {
  //   // this.state.currentWeight = [];
  //   // this.state.weightSum = 0;

  //   this.setState(state => {
  //     let currentWeight = this.state.currentWeight;
     
  //     // let add = (a, b) => a + b;
  //     let weightSum = this.state.currentWeight;
  //     // console.log("Weight Sum ", weightSum);

  //     return {
  //       currentWeight,
  //       weightSum
  //     };
  //   });
  // }
};

  clearAll = event => {
    // this.state.currentWeight = [];
    // this.state.weightSum = 0;

    this.setState(state => {
      // let currentWeight = this.state.currentWeight;
     
      // let add = (a, b) => a + b;
      // let weightSum = this.state.currentWeight;
      // console.log("Weight Sum ", weightSum);

      return {
        currentWeight: [],
        weightSum: 0
      };
    });
    console.log("cleared ", this.state.currentWeight);
  };


  static getDerivedStateFromProps = (props, state) => {
    console.log(props, state);
    return { show: props.show };
  };

  handleClose = () => {
    this.props.toggle(false);
  };

  render() {
    return (
      <Modal
        onSubmit={this.handleSubmit}
        show={this.state.show}
        onHide={this.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Lift</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId="formGroupLiftName">
            <Form.Label>Lift Name:</Form.Label>
            <Form.Control
              type="name"
              placeholder={this.state.liftName}
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
            <Form.Group controlId="formGroupBarWeight">
              <Form.Label>Bar Weight:</Form.Label>
              <Form.Control
                type="barWeight"
                placeholder="Bar Weight"
                defaultValue={this.state.barWeight}
                onChange={this.handleInputChange}
                name="barWeight"
              />
            </Form.Group>
            <Form.Group controlId="formGroupCurrentWeight">
              <Form.Label id="current">Current Weight:</Form.Label>
              <Form.Label id="current">
              {this.state.weightSum + parseInt(this.state.barWeight)}
              </Form.Label>
            </Form.Group>
            <Form.Group controlId="weightButtons">
              {[1, 2.5, 5, 10, 15, 25, 45, 100].map(buttonValue => (
                <Button
                  variant="outline-dark"
                  id="weight"
                  key={buttonValue}
                  value={2 * buttonValue}
                  onClick={this.onAddItem}
                >
                  {buttonValue} lb
                </Button>
              ))}
            </Form.Group>
            <Form.Group controlId="removeLast">
              <Button variant="outline-dark"onClick={this.removeLast}>Remove Last Weight</Button>
            </Form.Group>
          </Form.Group>

          <Form.Group controlId="clearCurrent">
            <Button variant="outline-dark" onClick={this.clearAll}>
              Clear All{" "}
            </Button>
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
          <Button
            variant="outline-light"
            onClick={() => this.props.toggle(false)}
          >
            Close
          </Button>
          <Button
            variant="outline-light"
            type="submit"
            onClick={this.handleSubmit}
            // onSubmit={this.handleSubmit}
          >
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default EditModal;
