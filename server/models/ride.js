const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  source: String,

  destination: String,

  price: Number,

  seats: Number,
});

const Ride = mongoose.model("Ride", rideSchema);

module.exports = Ride;