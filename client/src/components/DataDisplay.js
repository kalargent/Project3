import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import "./styles/style.css";
// import { Link } from 'react-router-dom';
import axios from 'axios';
import API from "../utils/API";

const Lifts = props => (
  <tr>
      <td>{props.lifts.liftName}</td>
      <td>{props.lifts.reps}</td>
      <td>{props.lifts.pr}</td>
      <td>{props.lifts.date}</td>
      <td>
          {/* <Link to={"/edit/"+props.lifts._id}>Edit</Link> */}
      </td>
  </tr>
)
export default class DataDisplay extends Component {
  constructor(props) {
      super(props);
      this.state = {lifts: []};
  }
  
  componentDidMount() { 
    API.getfindAll()
              .then(response => {
                console.log("response is: ", response);
              this.setState({ lifts: response.data });
              console.log("#####")
              console.log(this.state.lifts);
          })
          .catch(function (error){
              console.log(error);
          })

  }

  liftList() {
      return this.state.lifts.map(function(currentLift, i){
          return <Lifts lifts={currentLift} key={i} />;
      })
  }
  render() {
      return (
          <div>
              <Table striped bordered hover variant="dark">
                  <thead>
                      <tr>
                          <th>Lift Name</th>
                          <th>Reps</th>
                          <th>PR</th>
                          <th>Date</th>
                          <th>Actions</th>

                      </tr>
                  </thead>
                  <tbody>
                      { this.liftList() }
                  </tbody>
              </Table>
          </div>
      )
  }
}

