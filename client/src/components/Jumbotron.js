import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";

import "./styles/style.css";

function Jumbo() {
  return (
    <Jumbotron fluid="true" className="text-center py-3 jumboStyle mb-0">
      <Image src={require("./images/Sarge.png")} className="logo-small"/>
    </Jumbotron>
  );
}

export default Jumbo;
