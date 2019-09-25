import Button from 'react-bootstrap/Button';

import React, { Component } from "react";


class PRButton extends Component {

  render () {
    return (

        <Button className="m-2" variant="danger" id="button" onClick={() => this.props.toggle(true)}>
          Add a New PR!
        </Button>
    )
  };
  

}



export default PRButton;
