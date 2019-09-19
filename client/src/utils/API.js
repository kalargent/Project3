import axios from 'axios';
// const router = require("express").Router();

// // const registerController = require("../../controllers/registerController");
export default {
   // Posts registered user
   postRegister: function(newUser) {
     return axios.post("/api/auth/register", newUser)
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