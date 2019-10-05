// import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
// import { Breakpoint, BreakpointProvider } from "react-socks";

import React, { Component } from "react";

class LogoutButton extends Component {
  logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  render() {
    return (
      // <Button className="m-2" variant="danger" id="button" onClick = {this.logout} >
      //   Logout!
      // </Button>

      // <BreakpointProvider>
      //   <Breakpoint small down>
          <Col className="text-center m-0">
            <Image
            id="button"
              src={require("./images/LogoutButton.png")}
              className="pr-image-small"
              onClick = {this.logout} 
              fluid="true"
            />
          </Col>
      //   </Breakpoint>
      //   <Breakpoint medium up>
      //     <Col className="text-center mt-5 p-0 m-0">
      //       <Image
      //       id="button"
      //         src={require("./images/LogoutButton.png")}
      //         className="pr-image-medium"
      //         onClick = {this.logout} 
      //         fluid="true"
      //       />
      //     </Col>
      //   </Breakpoint>
      // </BreakpointProvider>
    );
  }
}

export default LogoutButton;
