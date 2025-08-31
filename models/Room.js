const mongoose = require("mongoose"); 

const RoomSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
});

module.exports = mongoose.model("Room", RoomSchema);
