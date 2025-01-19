const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoUrl = 'mongodb+srv://divyapawar0819:divya@cluster0.ik1z8.mongodb.net/'
 try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error in database connection:", error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;