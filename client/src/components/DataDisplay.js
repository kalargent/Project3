import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import "./styles/style.css";
// import { Link } from 'react-router-dom';
import axios from "axios";
import API from "../utils/API";
// import EditButton from "../components/EditButton";
import DeleteButton from "../components/DeleteButton";
import moment from "moment";

const Lifts = props => (
  <tr>
    <td>{props.lifts.liftName}</td>
    <td>{props.lifts.reps}</td>
    <td>{props.lifts.pr}</td>
    <td>{ moment(props.lifts.date).format("LL")}</td>
    <td>
      {/* <EditButton type="button"/> */}
      <DeleteButton type="button" id={props.lifts._id} />
      {/* <Link to={"/edit/"+props.lifts._id}>Edit</Link> */}
    </td>
  </tr>
);
export default class DataDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { lifts: [], date: "" };
  }

  componentDidMount() {
    API.getfindAll()
      .then(response => {
        console.log("response is: ", response);
        this.setState({ lifts: response.data });
        console.log("#####");
        // this.setState({ date: moment(response.data.date).format("MMM Do YY") });
        // let date = moment(response.date).format("MMM Do YY");
        console.log(this.state.lifts);
        // console.log(this.state.date);

      })
      .catch(function(error) {
        console.log(error);
      });
  }

  liftList() {
    return this.state.lifts.map(function(currentLift, i) {
      return <Lifts lifts={currentLift} key={i} />;
    });
  }
  render() {
    return (
      <div>
        <Col >
          <Table responsive="true" striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Lift Name</th>
                <th>Reps</th>
                <th>PR</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{this.liftList()}</tbody>
          </Table>
        </Col>
      </div>
    );
  }
}
