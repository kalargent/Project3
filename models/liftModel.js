var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LiftSchema = new Schema({

  liftName: {
    type: String,
    required: true
  },
  
  reps: {
    type: String,
    required: true
  },
  
  pr: {
    type: Number,
    required: false 
  },
  
  userID: {
    type: String, 
    required: true
  }, 

  date: {
    type: Date,
    default: Date.now
  }


});

var Lift = mongoose.model("Lift", LiftSchema);

module.exports = Lift;