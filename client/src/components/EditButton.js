import Button from "react-bootstrap/Button";
import React, { Component } from "react";

class EditButton extends Component {
  render() {
    return (
      <Button className="m-2" variant="danger" id="button"
      // onClick={() => this.props.toggle(true)}
      >
        Edit Lift
      </Button>
    );
  }
}

export default EditButton;
