/*
THIS FILE SHOULD CONTAIN PROTECTED (AUTHENTICATED) ROUTES ONLY

These are routes like Get a Profile and a Dashboard that require a JWT to access.
*/

const router = require("express").Router();
let User = require("../models/userModel");
let Lift = require("../models/liftModel");
const passport = require("passport");
const bcrypt = require("bcrypt");
const exerciseController = require("../../controllers/exerciseController");

/*
GET USER DATA
This API should determine the user and return their data (JSON) 
so that the front end can render it 
*/

router
  .route("/dashboard")
  .get(exerciseController.findAll)
//   .post(exerciseController.create);

/*
SAVE EXERCISE
This API saves a new document to the collection.
*/
router.route("/addnewlift").post((req, res) => {
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

/*
UPDATE EXERCISE
This API updates an existing document in the collection.
*/
router.route('/update/:id').post((req, res) => {
  console.log(req)
  exerciseController.update(req, res);
})
/*
DELETE EXERCISE
This API updates an existing document in the collection.
*/
router.route('/:id').delete((req, res) => {
  exerciseController.delete(req, res);
})
/*
LOGOUT
Self-explanatory
*/

module.exports = router;
