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
        user: loggedIn.data.user.id, 
        token: loggedIn.data.token
      }
      console.log(user); 
      localStorage.setItem("user", JSON.stringify(user)); 
    })
    
  }
};

// module.exports = router;

// // Gets the book with the given id
// getBook: function(id) {
//   return axios.get("/api/books/" + id);
// },
// // Deletes the book with the given id
// deleteBook: function(id) {
//   return axios.delete("/api/books/" + id);
// },
// // Saves a book to the database
// saveBook: function(bookData) {
//   return axios.post("/api/books", bookData);
// }

// const router = require("express").Router();
// const registerController = require("../../controllers/registerController");

// Matches with "/api/books"

// router.route("/")
//  .get(registerController.findAll)
//  .post(registerController.create);
// // Matches with "/api/books/:id"
// router
//  .route("/:id")
//  .get(registerController.findById)
//  .put(registerController.update)
//  .delete(registerController.remove);
