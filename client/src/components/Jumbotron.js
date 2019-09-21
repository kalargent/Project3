import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./styles/style.css"

function Jumbo() {
  return (
    <Jumbotron fluid className="text-center py-3 jumboStyle mb-0">
      <h1 className="red">Sarge</h1>
    </Jumbotron>
  );
}

export default Jumbo;
