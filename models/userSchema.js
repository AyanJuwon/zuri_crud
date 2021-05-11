const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstname: "string",
  lastname: "string",
  country: "string",
  email: "string",
});

const User = mongoose.model("sampleUserData", userSchema);

module.exports = User