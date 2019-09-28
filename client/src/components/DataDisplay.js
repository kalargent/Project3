import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import "./styles/style.css";

class DataDisplay extends Component {

  // handleLoad = event => {
  //   // const token = serverResult;
  //   event.preventDefault();
  //   API.getfindAll ().then(()=>{

  //   })
  //   });
  //   // JSON.parse(loginUser);
  //   console.log(loginUser);
  // };

  render() {
    return (
      <Container>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Lift Name</th>
              <th>Reps</th>
              <th>PR</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>props.whatever</td>
              <td>props.whatever</td>
              <td>props.whatever</td>
              <td>props.whatever</td>
            </tr>
            <tr>
              <td>props.whatever</td>
              <td>props.whatever</td>
              <td>props.whatever</td>
              <td>props.whatever</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default DataDisplay;
