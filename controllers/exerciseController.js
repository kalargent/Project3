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
  }

  // update

  // remove
};
