import React from "react";
import Jumbo from "../components/Jumbotron";
import SideNav from "../components/SideNav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../components/styles/style.css"
// import register from "../registerServiceWorker";

function Welcome() {
  return (
    // When page loads login should display and registration should be hidden
    // When user clicks register, login should hide and registration should become visible
    // reverse process when user clicks submit on registration form
    <div className="bg-gray">
      <Jumbo />
      <Row>
        <Col md={3} id="sideContainer" className="bg-dk-gray height100 align-left hideScroll">
          <SideNav />
        </Col>
        <Col fluid id="mainContainer" className="height100 text-center">
          
        </Col>
      </Row>
    </div>
  );
}

export default Welcome;
