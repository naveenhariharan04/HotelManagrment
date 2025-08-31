const express = require("express");
const router = express.Router();
const { bookRoom, getReservations } = require("../controllers/reservationController");
router.post("/", bookRoom);
router.get("/", getReservations);
module.exports = router;
