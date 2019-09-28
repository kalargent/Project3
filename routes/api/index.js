const express = require("express"); 
// const router = require("express").Router();
const auth = require("./auth"); 
const users =  require("./users"); 
const passport = require("passport"); 

const router = express.Router(); 

router.use("/auth", auth);
router.use("/users", passport.authenticate("jwt", { session: false }), users);

const apiRoutes = express.Router(); 

apiRoutes.use("/api" , router); 

module.exports = apiRoutes; 