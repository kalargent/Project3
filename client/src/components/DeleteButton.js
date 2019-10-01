import Button from 'react-bootstrap/Button';

import React, { Component } from "react";



class DeleteButton extends Component {

  render () {
    return (

        <Button className="m-2" variant="danger" id="button" >
          Delete Lift 
        </Button>
    )
  };
  

}



export default DeleteButton;
