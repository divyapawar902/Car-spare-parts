const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

// Temporary storage for OTPs (use a database in production)
const OTP_STORAGE = {};

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service
  auth: {
    user: "your-email@gmail.com", // Replace with your email
    pass: "your-email-password", // Replace with your email password
  },
});

// Endpoint to send OTP
app.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
  OTP_STORAGE[email] = otp; // Store OTP (consider expiration in production)

  try {
    await transporter.sendMail({
      from: "your-email@gmail.com",
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}. It will expire in 10 minutes.`,
    });

    res.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to send OTP", error });
  }
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
