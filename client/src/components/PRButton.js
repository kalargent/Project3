// import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
// import  { Breakpoint, BreakpointProvider } from 'react-socks';

import React, { Component } from "react";

class PRButton extends Component {
  render() {
    return (
      // <Button className="m-2" variant="danger" id="button" onClick={() => this.props.toggle(true)}>
      //   Add a New PR!
      // </Button>
        // <BreakpointProvider>
        //   <Breakpoint small down>
            <Col className="text-center m-0">
              <Image
                  src={require("./images/NewPRButton.png")}
                  className="pr-image-small"
                  onClick={() => this.props.toggle(true)}
                  fluid="true"
                  />
            </Col>
        //   </Breakpoint>
        //   <Breakpoint medium up>
        //     <Col className="text-center pl-0 m-0 mb-5">
        //       <Image
        //           src={require("./images/NewPRButton.png")}
        //           className="pr-image-medium p-2"
        //           onClick={() => this.props.toggle(true)}
        //           fluid="true"
        //           />
        //     </Col>
        //   </Breakpoint>
        // </BreakpointProvider>

);
  }
}

export default PRButton;
