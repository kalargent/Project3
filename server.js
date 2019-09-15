const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose"); 
const passport = require ("passport"); 
const session = require("express-session"); 
const flash = require("connect-flash")

// Passport Config 
require("./config/passport")(passport); 


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//DB Config
var db = require("./config/keys").MongoURI; 

//Connect to mongo 
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("mongo is connected...."))
    .catch (err => console.log(err)); 


//body parser 
app.use(express.urlencoded({ extended: false })); 

// passport middleware 
app.use(passport.initialize());
app.use(passport.session());
 

const usersRoute = require('./routes/users');

// app.use('/users', usersRoute)
app.use('/users', passport.authenticate('jwt', {session: false}), usersRoute);

const auth = require('./routes/auth');
app.use('/auth', auth);


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
