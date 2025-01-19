const bcrypt = require("bcrypt");
const User = require("../models/usermodels");

const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

// Controller for user signup
const Signup = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email);
  
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newUser = new User({ name, email, password});
    await newUser.save();
    res.status(201).json(
      { message: "User registered successfully" }
    );
  } catch (error)
   {
    if (error.code === 11000)
       {
      res.status(400).json({ message: "Email already exists" });
    } else {
      res.status(500).json({ message: "Server error" });
    }
  }
};

// Controller for user login

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Compare passwords
    const isPasswordCorrect = user.password==password;
    if (!isPasswordCorrect) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    res.status(200).json({ success: true, message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { Signup, Login };
