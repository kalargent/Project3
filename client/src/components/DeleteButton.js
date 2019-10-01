import Button from 'react-bootstrap/Button';

import React, { Component } from "react";
import API from "../utils/API"; 



class DeleteButton extends Component {
    state =  { 
        liftID: this.props.id 
    }

    handleDelete = (event) => {
        // const token = serverResult;
        // event.preventDefault();
        const liftID = this.state.liftID;
        console.log("Lift ID is " + liftID);  
        API.deleteLift(liftID)
        .then (() =>  {  
          window.location.reload(); 
        })
        
        // this.setState();
      }
    

  render () {
    return (

        <Button className="m-2" variant="danger" id="button" onClick = {() => {this.handleDelete()}} >
          Delete Lift 
        </Button>
    )
  };
  

}

export default DeleteButton;
