import Button from 'react-bootstrap/Button';

import React, { Component } from "react";



class LogoutButton extends Component {
    logout = () => {
        localStorage.clear();
        window.location.href = 'http://localhost:3000/';
    }

  render () {
    return (

        <Button className="m-2" variant="danger" id="button" onClick = {this.logout} >
          Logout!
        </Button>
    )
  };
  

}



export default LogoutButton;
