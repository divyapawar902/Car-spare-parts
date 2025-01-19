const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/userroutes");

dotenv.config();

const app = express();
app.use(express.json());

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to the database
connectDB();

// Routes
app.use("/m2/users", userRoutes);



const port = 5000;
app.listen(port, (error) => {
  if (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
  console.log(`Server running at http://localhost:${port}`);
});