import axios from "axios";
// const router = require("express").Router();

// // const registerController = require("../../controllers/registerController");
export default {
  // Posts registered user
  postRegister: function(newUser) {
    return axios.post("/api/auth/register", newUser);
  },

  postLogin: function(loginUser) {
    JSON.stringify(loginUser); 
    console.log("i logged in"); 
    axios.post("/api/auth/login", loginUser)
    .then (function (loggedIn) {
      // JSON.stringify(loginUser); 
      console.log(loggedIn); 
      var user = {
        user: loggedIn.data.id, 
        token: loggedIn.data.token
      }
      console.log(user); 
      localStorage.setItem("user", JSON.stringify(user)); 
    })
    
  }
};

