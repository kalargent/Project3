// import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import React, { Component } from "react";

class PRButton extends Component {
  render() {
    return (
      // <Button className="m-2" variant="danger" id="button" onClick={() => this.props.toggle(true)}>
      //   Add a New PR!
      // </Button>
      <Container>
        <Image
          src={require("./images/NewPRButton.png")}
          className="pr-image"
          onClick={() => this.props.toggle(true)}
          fluid="true"
          />
      </Container>
    );
  }
}

export default PRButton;
