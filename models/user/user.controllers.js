const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRATION_MS } = require("./config/keys");

exports.signUp = async (req, res, next) => {
  try {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltOrRounds);
    req.body.password = hashedPassword;
    const newUser = await User.create(req.body);
    const payload = {
      username: newUser.username,
      id: newUser.id,
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      exp: Date.now() + JWT_EXPIRATION_MS,
    };
    const token = jwt.sign(payload, JWT_SECRET);
    return res.status(201).json({ token: token });
  } catch (error) {
    next(error);
  }
};
