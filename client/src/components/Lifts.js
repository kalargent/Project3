import EditButton from "../components/EditButton";
import DeleteButton from "../components/DeleteButton";
import Button from "react-bootstrap/Button";

import API from "../utils/API";
import React, { Component } from "react";

class Lifts extends Component {
  state = {
    liftID: this.props.id,
    liftName: this.props.liftName,
    reps: this.props.reps,
    pr: this.props.pr
  };

  handleEdit = event => {
    // const token = serverResult;
    // event.preventDefault();
    const liftID = this.state.liftID;
    console.log("Lift ID is " + liftID);
    // API.updateLift(liftID)
    // .then (() =>  {
    //   window.location.reload();
    // })

    // this.setState();
  };

  render() {
    return (
      <tr>
        {/* <td>{props.lifts.liftName}</td>
        <td>{props.lifts.reps}</td>
        <td>{props.lifts.pr}</td>
        <td>{props.lifts.date}</td> */}
        <td>
          {/* <EditButton type="button" toggle={this.props.onToggle} /> */}
          <Button className="m-2" variant="danger" id="button" onClick={() => this.props.toggle(true)}>
          Edit Lift 
        </Button>
        
          <DeleteButton type="button" />
          {/* <Link to={"/edit/"+props.lifts._id}>Edit</Link> */}
        </td>
      </tr>
    );
  }
}

export default Lifts;
