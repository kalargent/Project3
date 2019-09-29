import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import "./styles/style.css";
// import { Link } from 'react-router-dom';
import axios from 'axios';
import API from "../utils/API";

// class DataDisplay extends Component {

  // handleLoad = event => {
  //   // const token = serverResult;
  //   event.preventDefault();
  //   API.getfindAll ().then(()=>{

  //   })
  //   });
  //   // JSON.parse(loginUser);
  //   console.log(loginUser);
  // };

//   render() {
//     return (
//       <Container>
//         <Table striped bordered hover variant="dark">
//           <thead>
//             <tr>
//               <th>Lift Name</th>
//               <th>Reps</th>
//               <th>PR</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>props.whatever</td>
//               <td>props.whatever</td>
//               <td>props.whatever</td>
//               <td>props.whatever</td>
//             </tr>
//             <tr>
//               <td>props.whatever</td>
//               <td>props.whatever</td>
//               <td>props.whatever</td>
//               <td>props.whatever</td>
//             </tr>
//           </tbody>
//         </Table>
//       </Container>
//     );
//   }
// }


const Lifts = props => (
  <tr>
      <td>{props.lifts.lifts_liftName}</td>
      <td>{props.lifts.lifts_reps}</td>
      <td>{props.lifts.lifts_pr}</td>
      <td>{props.lifts.lifts_date}</td>
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
  // componentDidMount() {
  //     axios.get('/api/users/dashboard/')
  //         .then(response => {
  //             this.setState({ lifts: response.data });
  //             console.log(this.state.lifts);
  //         })
  //         .catch(function (error){
  //             console.log(error);
  //         })
  // }

  componentDidUpdate() { 
    API.getfindAll()
              .then(response => {
              this.setState({ lifts: response.data });
              console.log(this.state.lifts);
          })
          .catch(function (error){
              console.log(error);
          })

  }

  liftList() {
      return this.state.lifts.map(function(currentLift, i){
          return <Lifts lift={currentLift} key={i} />;
      })
  }
  render() {
      return (
          <div>
              {/* <h3>Lifts List</h3> */}
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

// export default DataDisplay;
