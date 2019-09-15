/*
THIS FILE SHOULD CONTAIN PROTECTED (AUTHENTICATED) ROUTES ONLY

These are routes like Get a Profile and a Dashboard that require a JWT to access.
*/

const router = require('express').Router();
let User = require('../models/userModel');
const passport = require("passport"); 
const bcrypt = require ("bcrypt"); 

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err));
})


/*
GET PROFILE 
This API was used to text access using a JWT to prove that the API works
*/
router.route('/profile').get((req, res) => {
    console.log(req.user); 
    res.json({message:"tbd"})

}); 

/*
GET USER DATA
This API should determine the user and return their data (JSON) 
so that the front end can render it 
*/

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