import axios from ("axios"); 


export default {
  // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // Deletes the book with the given id
  // eleteBook: function(id) {
  //   retudrn axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  register: function(newUser) {
    return axios.post("/api/auth/register", newUser);
  }
};