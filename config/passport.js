/*
PASSPORT STRATEGIES

These should not need to be edited unless we decide to change the routes.
*/

var localStrategy = require("passport-local").Strategy;
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

// User Model
var User = require("../models/userModel");

// Export the strategy referenced above
module.exports = function(passport) {
  passport.use(
    "local",
    new localStrategy(
      { usernameField: "username" },
      (username, password, done) => {
        // Check for user
        User.findOne({ username: username })
          .then(user => {
            if (!user) {
              return done(null, false, {
                message: "The username you entered is not registered."
              });
            }

            // Password comparison using bcrypt
            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) throw err;

              if (isMatch) {
                let returnUser = {
                  username: user.username,
                  id: user.id
                };
                return done(null, returnUser);
              } else {
                return done(null, false, { message: "Incorrect Password." });
              }
            });
          })
          .catch(err => console.log(err));
      }
    )
  );

  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: "your_jwt_secret"
      },
      function(jwtPayload, cb) {
        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        return cb(null, jwtPayload);
      }
    )
  );

  // passport.serializeUser((user, done) => {
  //   done(null, user.id);
  // });

  // passport.deserializeUser((id, done) => {
  //   User.findById(id, (err, user) => {
  //     done(err, user);
  //   });
  // });
};
