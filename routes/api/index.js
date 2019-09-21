const express = require("express"); 
// const router = require("express").Router();
const auth = require("./auth"); 
const users =  require("./users"); 

const router = express.Router(); 

router.use("/auth", auth);
router.use("/users", users); 

const apiRoutes = express.Router(); 

apiRoutes.use("/api" , router); 

module.exports = apiRoutes; 