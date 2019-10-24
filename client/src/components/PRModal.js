import React, { Component } from "react";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Login from "./Login";
// import Register from "./Register";
// import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./styles/style.css";
import API from "../utils/API";
import Form from 'react-bootstrap/Form';

class PRModal extends Component {
  state = {
    liftName: "",
    reps: "",
    pr: "",
    show: false, 
    currentWeight: [], 
    barWeight: 0
    }

  handleClose = () => {
    // this.props.toggle()
    // this.setState({
    //   show: false
    // }, () => this.props.onToggle(this.state.show)
    // ) 
    this.props.onToggle(false)
  }

  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // async handleCreation(event) {
  //   this.setState({ loading: true });
  //   await Axios.post('/createElement', data);
  //   this.setState({ data: this.state.data.concat(data), loading: false });
  // }
  

  handleSubmit = (event) => {
    // const token = serverResult;
    event.preventDefault();
    var newLift = {
      liftName: this.state.liftName,
      reps: this.state.reps,
      pr: this.state.pr,
      };
    API.postLiftModel(newLift)
    .then (() =>  { 
      this.props.onToggle(false); 
      window.location.reload(); 
    })
    
    // this.setState();
  }

  // handleButtonClicked = (event) => {
  //   console.log("Button click " + event.currentTarget.value)
  //   var addedWeight = parseInt(event.currentTarget.value)
  //   console.log(addedWeight)
  //   var newarray = this.state.currentWeight.push(addedWeight)
  //   console.log ("new array is ", newarray)
  //   console.log(this.state.currentWeight,  " <-- that is currentweight state")
  //   this.setState({
  //     currentWeight: newarray,
  //     // message: 'Button ${event.currentTarget.value} clicked'
  //   })
  //   // console.log(this.state.currentWeight)
  // }

  onAddItem = (event) => {
    var addedWeight = parseInt(event.currentTarget.value)
    console.log(addedWeight)
    this.setState(state => {
      const currentWeight = this.state.currentWeight.concat(addedWeight); 
      console.log(this.state.currentWeight, " <-- current weight state")
      const add = (a, b) => a + b
      const weightSum = currentWeight.reduce(add); 
      console.log("Weight Sum ", weightSum); 
      
      return {
        currentWeight, 
      }
    })
  }

  removeLast = (event) => {
    this.state.currentWeight.pop(); 
    console.log("item removed");
    console.log(this.state.currentWeight, " < -- was the last one removed?"); 
    
  }

  clearAll = (event) => {
    this.state.currentWeight = 0; 
    console.log("cleared ", this.state.currentWeight)
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
          <Modal.Title>Add New Lift</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form.Group controlId="formGroupLiftName">
        <Form.Label>Lift Name:</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter Lift"
          defaultValue={this.state.liftName}
          onChange={this.handleInputChange}
          name="liftName"
        />
      </Form.Group>
      <Form.Group controlId="formGroupReps">
        <Form.Label>Reps:</Form.Label>
        <Form.Control
          type="reps"
          placeholder="Enter Reps"
          defaultValue={this.state.reps}
          onChange={this.handleInputChange}
          name="reps"
        />
      </Form.Group>

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

      {/* <Form.Group controlId="barDisplay">
       <div>
         <table>
           <tbody>
             <tr>
               <td>=== 0 lb ===</td>
             </tr>
           </tbody>
         </table>
       </div>
        
      </Form.Group> */}

      <Form.Group controlId="formGroupCurrentWeight">
        <Form.Label id="current">Current Weight:</Form.Label>
        <Form.Label id="current">
        {this.state.currentWeight + parseInt(this.state.barWeight)}
        </Form.Label>
        
      </Form.Group>

      <Form.Group controlId="weightButtons">
        {[1, 2.5, 5, 10, 15, 25, 45, 100].map((buttonValue) => 
          <Button variant="outline-dark" id="weight" key={buttonValue} value={2 * buttonValue} onClick={this.onAddItem}>{buttonValue} lb</Button>
        )}
        
      </Form.Group>

      <Form.Group controlId="removeLast">
  
        <Button variant="outline-dark" onClick={this.removeLast}>Remove Last Weight</Button> 
        
      </Form.Group>

      <Form.Group controlId="clearCurrent">
  
        <Button variant="outline-dark" onClick={this.clearAll}>Clear All </Button> 
        
      </Form.Group>


      <Form.Group controlId="formGroupPR">
        <Form.Label>Personal Record:</Form.Label>
        <Form.Control
          type="record"
          placeholder="Enter PR"
          defaultValue={this.state.pr}
          onChange={this.handleInputChange}
          name="pr"
        />
      </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-light" 
          onClick={this.handleClose} 
          >Close</Button>
          <Button variant="outline-light" type="submit" 
          onClick={this.handleClose, this.handleSubmit}
          // onSubmit={this.handleSubmit}
          >Save changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default PRModal;
