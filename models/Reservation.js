const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  name: String,
  phone: String,
  roomType: String,
  checkIn: Date,
  checkOut: Date,
  rooms: Number,
  adults: Number,
  children: Number,
});

module.exports = mongoose.model("Reservation", ReservationSchema);
