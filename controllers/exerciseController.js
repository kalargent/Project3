const db = require("../models");

module.exports = {
  // find all
  findAll: function(req, res) {
    db.Lift.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // findOneAndUpdate: function (req, res) { 
  //   db.Users.findById 
  // }, 

  // create
  create: function(query, res) {
    console.log("-------");
    console.log("line 19 ", query);
    console.log("-------");
    db.Lift.create(query)
      .then (function(query) { 
        console.log("in then statement", query); 
        // return db.Users.findOneAndUpdate( { id: query.userID }, { lift: query._id }, { new: true } );
      })
      .then(dbModel => res.json(dbModel)) 
      // .then (function (dbUser) {
        // res.json(dbUser);  
      // })
      .catch (function(err) { 
        res.json(err); 
      })
      // .then db.Users.findOneAndUpdate ( {_id: reqs.params} )
      // .catch(err => res.status().json(err));
  },

  // update
  update: function(req, res) {
    console.log(req.body)
    db.Lift.findById(req.params.id).then(dbModel => {
      dbModel.liftName = req.body.liftName;
      dbModel.reps = req.body.reps;
      dbModel.pr = req.body.pr;
      // dbModel.date = Date.parse(req.body.date);
      dbModel
        .save()
        .then(() => res.json("Exercise updated."))
        .catch(err => res.status(400).json("Error: " + err));
    });
  },

  // remove
  delete: function(req, res) {
    db.Lift.findByIdAndDelete(req.params.id)
      .then(() => res.json("Exercise removed."))
      .catch(err => res.status(400).json("Error: " + err));
  }
};
