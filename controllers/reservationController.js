const Reservation = require("../models/Reservation");
exports.bookRoom = async (req, res) => {
  const reservation = new Reservation(req.body);
  await reservation.save();
  res.status(201).json(reservation);
};
exports.getReservations = async (req, res) => {
  const reservations = await Reservation.find();
  res.json(reservations);
};
