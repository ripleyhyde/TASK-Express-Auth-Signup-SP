const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: {
    type: String,
    required: true,
    match: [
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Please enter a valid email address",
    ],
  },
  firstName: String,
  lastName: String,
});

module.exports = mongoose.model("User", UserSchema);
