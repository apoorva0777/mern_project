require("dotenv").config();
const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful to DB");
  } catch (error) {
    console.error("database connection failed", error);
    process.exit(1);
  }
};

module.exports = connectDb;
