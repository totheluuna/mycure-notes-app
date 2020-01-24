const express = require("express");
const router = express.Router();
const auth = require("../config/Auth.js");
const userRepository = require("../repositories/UserRepository");

router.post("/register", userRepository.registerNewUser);
router.post("/login", userRepository.loginUser);
router.get("/me", auth, userRepository.getUserDetails);

module.exports = router;