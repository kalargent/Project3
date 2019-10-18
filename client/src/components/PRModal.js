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
    currentWeight:0
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

  handleButtonClicked = (event) => {
    console.log("Button click " + event.currentTarget.value)
    var addedWeight = event.currentTarget.value
    console.log(addedWeight)
    this.setState({
      currentWeight: this.state.currentWeight + addedWeight,
      message: 'Button ${event.currentTarget.value} clicked'
    })
    console.log(this.currentWeight)
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
          defaultValue={this.state.currentWeight}
          // onChange={this.handleInputChange}
          name="currentWeight"
          
        />
      </Form.Group>

      <Form.Group controlId="barDisplay">
       <div>
         <table>
           <tbody>
             <tr>
               <td>=== 0 lb ===</td>
             </tr>
           </tbody>
         </table>
       </div>
        
      </Form.Group>

      <Form.Group controlId="formGroupCurrentWeight">
        <Form.Label>Current Weight:</Form.Label>
        <Form.Control
          type="currentWeight"
          placeholder="Current Weight"
          defaultValue={this.state.currentWeight}
          // onChange={this.handleInputChange}
          name="currentWeight"
          
        />
      </Form.Group>

      <Form.Group controlId="weightButtons">
        {/* [1, 2.5, 5].map(buttonId => (
          <Button key={buttonId} value={buttonId} variant="outline-dark">
            button {buttonId}
          </Button>
        )) */}
        {/* <Form.Label>Current Weight:</Form.Label> */}
        <Button variant="outline-dark" id="weight" value={2} onClick={this.handleButtonClicked}>1lb</Button>
        <Button variant="outline-dark" id="weight" value={5} onClick={this.handleButtonClicked}>2.5lb</Button>
        <Button variant="outline-dark" id="weight" value={10} onClick={this.handleButtonClicked}>5lb</Button>  
        <Button variant="outline-dark" id="weight" value={20} onClick={this.handleButtonClicked}>10lb</Button>
        <Button variant="outline-dark" id="weight" value={30} onClick={this.handleButtonClicked}>15lb</Button> 
        <Button variant="outline-dark" id="weight" value={50} onClick={this.handleButtonClicked}>25lb</Button> 
        <Button variant="outline-dark" id="weight" value={90} onClick={this.handleButtonClicked}>45lb</Button> 
        <Button variant="outline-dark" id="lastWeight" value={200} onClick={this.handleButtonClicked}>100lb</Button> 
        
      </Form.Group>

      <Form.Group controlId="removeLast">
  
        <Button variant="outline-dark">Remove Last Weight</Button> 
        
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
