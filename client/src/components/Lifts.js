import EditButton from "../components/EditButton";
import DeleteButton from "../components/DeleteButton";
import EditModal from "../components/EditModal";
import Button from "react-bootstrap/Button";
import API from "../utils/API";
import React, { Component } from "react";

class Lifts extends Component {
  state = {
    liftID: this.props.id,
    liftName: this.props.liftName,
    reps: this.props.reps,
    pr: this.props.pr,
    editModal: false
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

  onToggleModal = state => {
    this.setState({ editModal: state });
  };

  render() {
    return (
      <tr>
        <td>{this.props.lifts.liftName}</td>
        <td>{this.props.lifts.reps}</td>
        <td>{this.props.lifts.pr}</td>
        <td>{this.props.lifts.date}</td>
        <td>
          <DeleteButton type="button" id={this.props.lifts._id} />
          <EditButton
            type="button"
            id={this.props.lifts._id}
            toggle={this.onToggleModal}
          />
        </td>
        <EditModal show={this.state.editModal} onToggle={this.onToggleModal} />
      </tr>
    );
  }
}

export default Lifts;
