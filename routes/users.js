const router = require('express').Router();
let User = require('../models/userModel');
const passport = require("passport"); 

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err));
})

router.route('/add').post((req, res) => {
    // testing 
    // console.log(req.body); 
    // res.send("hello"); 

    var { name, username, email, password, password2 } = req.body; 
    var errors = []; 

    //check required fields 
    if (!name || !username || !email || !password || !password2) {
        errors.push({ msg: "Please fill in all fields." }); 
    }

    // check for password match 
    if (password !== password2) {
        errors.push({ msg: "Passwords do not match." });
    }

    //check pass length 
    // if (password.length < 6) {
    //     errors.push({ msg: "Password must be 6 or more characters." });
    // }

    if (errors.length > 0) {
        res.json( {
            success:false,  
            errors:errors
        })
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
                        name,
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