const db = require("../models");

module.exports = {
  // find all
  findAll: function(req, res) {
    db.Lift.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // create
  create: function(query, res) {
    console.log("-------");
    console.log(query);
    console.log("-------");
    db.Lift.create(query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status().json(err));
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
