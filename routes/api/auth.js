/*
THIS FILE SHOULD CONTAIN PUBLIC (UNAUTHENTICATED) ROUTES ONLY

These are routes like Register and Authenticate (Login) that do not require a JWT to access.
*/

const express = require('express');
const router  = express.Router();
const jwt = require('jsonwebtoken');
const passport = require("passport");
const User = require("../../models/userModel"); 
const bcrypt = require("bcryptjs"); 

/*HOME*/

router.route('/').get((req, res) => {
        User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error:' + err));
    })

/* POST AUTH USING PASSPORT. 
This route uses passport.authenticate to authenticate the user and generate 
a JWT that will be used on protected routes. 
*/
router.post('/login', (req, res) => {
    // console.log("login before auth is called"); 
    passport.authenticate('local', {session: false}, (err, user) => {
        // console.log("inside auth")
        if (err || !user) {
            return res.status(400).json({
                message: 'Username/Password combination not found. Please try again.',
                user   : user
            });
            
        } 
       req.login(user, {session: false}, (err) => {
        //    console.log("inside login")
           console.log(user); 
           if (err) {
               res.send(err);
           }
           // generate a signed son web token with the contents of user object and return it in the response
           const token = jwt.sign(user, 'your_jwt_secret');
           console.log(token); 
           var loggedIn = { 
               user: user.user, 
               id: user.id, 
               token:token
           }
           return res.json(loggedIn);
        });
    })(req, res);
});

/* REGISTER. 
This route takes in the users information, 
uses bcrypt to encrypt their password, and saves them to the database. 
*/

router.route('/register').post((req, res) => {
    // testing 
    // console.log(req.body); 
    // res.send("hello"); 

    console.log(req.body); 

    var { username, email, password } = req.body; 
    var errors = []; 

    //check required fields 
    if (!username || !email || !password) {
        errors.push({ msg: "Please fill in all fields." }); 
        // console.log(errors); 
    }

    // check for password match 
    // if (password !== password2) {
    //     errors.push({ msg: "Passwords do not match." });
    // }

    //check pass length 
    // if (password.length < 6) {
    //     errors.push({ msg: "Password must be 6 or more characters." });
    // }

    if (errors.length > 0) {
        res.json( {
            success:false,  
            errors:errors
        })
        console.log(errors); 
    } else {
        // Validation passed 
        console.log ("you're in else"); 
        User.findOne({ username: username }) 
            .then (user => {
                if (user) {
                    errors.push({ msg: "Email already in use!"});
                    res.json( {
                        success:false,  
                        errors:errors
                    }); 
                } else {
                    var newUser = new User({
                    
                        username,  
                        email, 
                        password
                    }); 
                    
                    // console.log(newUser); 
                    // res.send("new user"); 

                    // Hash password 
                    bcrypt.genSalt(10, (err, salt) =>
                        bcrypt.hash (newUser.password, salt, (err, hash) => {
                            if (err) throw err; 

                            // Set password 
                            newUser.password = hash; 

                            // Save user 
                            newUser.save() 
                                .then (user => {
                                    res.json( {
                                        success:true    
                                    })
        
                                })

                                .catch (err => console.log(err))
                        })); 
                }
            }); 
        } 
});

module.exports = router;