import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { Component } from "react";
import API from "../utils/API";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleSubmit = event => {
    event.preventDefault();
    var loginUser = {
      username: this.state.username,
      password: this.state.password
    };
    API.postLogin(loginUser).then(()=>{
      this.props.changeLoginState(true);
      this.props.toggleLogin(false);
      this.props.togglePRButton(true);
      this.props.toggleLogoutButton(true); 
    });
    console.log(loginUser);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    // Check if you have a user in local storage
    var checkUser = localStorage.getItem('user');
    checkUser = JSON.parse(checkUser);
    
    if (checkUser && checkUser.token) {
      this.props.changeLoginState(true);
      this.props.toggleLogin(false);
      this.props.togglePRButton(true);
      this.props.toggleLogoutButton(true); 
    }
  };

  changeLoginState = () => {
    let token = localStorage.getItem("user");
    console.log("Token obtained:" + localStorage.getItem("user"));
    if(token) {
      this.props.changeLoginState(true);
    } else {
      console.log("username/password combo incorrect");
      this.props.changeLoginState(false);
    }
  };

  hideLoginShowRegister = () => {
    this.props.toggleRegister(true);
    this.props.toggleLogin(false);

  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formGroupUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="Username"
            placeholder="Enter Username"
            onChange={this.handleInputChange}
            value={this.state.username}
            name="username"
          />
        </Form.Group>

        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={this.handleInputChange}
            value={this.state.password}
            name="password"
          />
        </Form.Group>

        <Button
          className="m-2"
          variant="danger"
          id="button"
          type="submit"
        >
          Login
        </Button>

        <Button
          className="m-2"
          variant="danger"
          id="button"
          onClick={this.hideLoginShowRegister}
        >
          Register
        </Button>
      </Form>
    );
  }
}

export default Login;
