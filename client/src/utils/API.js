import axios from "axios";
// import exerciseController from "../../../controllers/exerciseController"
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
    return axios.post("/api/auth/login", loginUser).then(function(loggedIn) {
      // JSON.stringify(loginUser);
      console.log(loggedIn);
      var user = {
        user: loggedIn.data.id,
        token: loggedIn.data.token
      };
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
    });
  },

  postLiftModel: function(newLift) {
    let authUser = localStorage.getItem("user");
    authUser = JSON.parse(authUser);
    let token = authUser.token;
    console.log(token);

    console.log("Post Lift");
    return axios.post("/api/users/addnewlift", newLift, {
      headers: {
        Authorization: "Bearer " + token
      }
    });
  },

  getfindAll: function() {
    let findByUser = localStorage.getItem("user");
    findByUser = JSON.parse(findByUser);
    let token = findByUser.token;
    let findByUserID = findByUser.user;

    return axios.get("/api/users/dashboard", findByUserID, {
      headers: {
        Authorization: "Bearer " + token
        
      }
    });
  }
};
