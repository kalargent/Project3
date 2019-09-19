const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose"); 
const passport = require ("passport"); 
const routes = require("./routes/api")
// const routes = require("./routes"); 
// const session = require("express-session"); 
// const flash = require("connect-flash") 

// Passport Config 
require("./config/passport")(passport); 


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//DB Config
var db = require("./config/keys").MongoURI; 

//Connect to mongo 
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/barbell");


//body parser 
app.use(express.urlencoded({ extended: false })); 
app.use(express.json()); 

// passport middleware 
app.use(passport.initialize());
app.use(passport.session());
 

const usersRoute = require('./routes/api/users');
const authRoute = require('./routes/api/auth'); 

app.use('/users', usersRoute)
app.use('/users', passport.authenticate('jwt', {session: false}), usersRoute);

// const auth = require('./routes/api/auth');
// app.use('/auth', auth);

app.use(routes); 

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });



app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
