import React, { Component } from "react";
import Jumbo from "../components/Jumbotron";
import SideNav from "../components/SideNav";
import DataDisplay from "../components/DataDisplay";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../components/styles/style.css";
// import register from "../registerServiceWorker";

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      loginHandle: false
    };
}

changeLoginState = (loginHandle) => {
    this.setState({loginHandle});
    console.log("login state: " + this.state.loginHandle)
}

// LoggedIn = (props) => {
//   const isLoggedIn =props.isLoggedIn;
//   if(isLoggedIn) {
//     return <DataDisplay changeLoginState={this.state.loginHandle}/>
//   }
//   return <h1>Wrong Username/Password combination</h1>
// }

  render() {
    return (
      // When page loads login should display and registration should be hidden
      // When user clicks register, login should hide and registration should become visible
      // reverse process when user clicks submit on registration form
      <div className="">
        <Jumbo />
        <Row id="body">
          <Col
            md={3}
            id="sideContainer"
            className="bg-dk-gray heightauto align-left hideScroll"
          >
            <SideNav changeLoginState={this.changeLoginState}/>
          </Col>
          <Col
            fluid
            id="mainContainer"
            className="height100 text-center m-3 pl-md-0 justify-content-md-center"
          >
            {/* <LoggedIn isLoggedIn={false}/> */}
            {this.state.loginHandle && (<DataDisplay changeLoginState={this.state.loginHandle}/>)}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Welcome;
