import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import "./styles/style.css";
import API from "../utils/API";
// import DeleteButton from "../components/DeleteButton";
// import EditButton from "../components/EditButton";
import EditModal from "../components/EditModal";
import Lifts from "../components/Lifts";


import moment from "moment";

// const Lifts = props => (

//   <tr>
//     <td>{props.lifts.liftName}</td>
//     <td>{props.lifts.reps}</td>
//     <td>{props.lifts.pr}</td>
//     <td>{ moment(props.lifts.date).format("LL")}</td>
//     <td>
//       <DeleteButton type="button" id={props.lifts._id} />
//       <EditButton type="button" id={props.lifts._id} toggle={this.onToggleModal}/>
//     </td>
//   </tr>
// );
export default class DataDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { lifts: [],
      date: "",
      editModal: false
     };
  }

  onToggleModal = state => {
    this.setState({ editModal: state });
  };

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
      return <Lifts toggle={this.onToggleModal} lifts={currentLift} key={i} />;
    });
  }
  render() {
    
    return (
      <div>
         <Col>
          {
            <EditModal
              show={this.state.editModal}
              toggle={this.onToggleModal}
            />
          }
        </Col>
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
