/*
THIS FILE SHOULD CONTAIN PROTECTED (AUTHENTICATED) ROUTES ONLY

These are routes like Get a Profile and a Dashboard that require a JWT to access.
*/

const router = require("express").Router();
let User = require("../models/userModel");
const passport = require("passport");
const bcrypt = require("bcrypt");
const exerciseController = require("../controllers/exerciseController");

/*
GET USER DATA
This API should determine the user and return their data (JSON) 
so that the front end can render it 
*/

// router
//   .route("/dashboard")
//   .get(exerciseController.findAll)
//   .post(exerciseController.create);

router.route("/profile").post((req, res) => {
  console.log(req.user);
  // console.log(req.query)
  var query = {
    liftName: req.query.liftName,
    reps: req.query.reps,
    pr: req.query.pr
  };
  console.log(query);
  // Return either basic json or a 401
  exerciseController.create(query, res);
//   res.json({ message: "tbd" });
  
});

// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

/*
SAVE EXERCISE
This API saves a new document to the collection.
*/

/*
UPDATE EXERCISE
This API updates an existing document in the collection.
*/

/*
LOGOUT
Self-explanatory
*/

module.exports = router;
