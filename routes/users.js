const router = require('express').Router();
let User = require('../models/userModel');
const passport = require("passport"); 
const bcrypt = require ("bcrypt"); 

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err));
})



router.route('/profile').get((req, res) => {
    console.log(req.user); 
    res.json({message:"tbd"})

}); 

module.exports = router;