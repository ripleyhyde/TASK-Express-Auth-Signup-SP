const express = require("express");
const router = express.Router();
const { signUp } = require("../user/user.controllers");

router.post("/apis/signup", signUp);

module.exports = router;
