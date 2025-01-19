const express = require("express");
const { Signup, Login } = require("../controllers/usercontrollers");

const router = express.Router();

// Routes
router.post("/signup", Signup);
router.post("/login", Login);


module.exports = router;