dotenv.config();
import mongoose from "mongoose";
import dotenv from "dotenv";

const MONGO_URI = process.env.MONGO_URI;

//conneting database
const connectDB = () => {
  mongoose.connect(MONGO_URI, (err) => {
    if (err) {
      console.log(`Database not connected: ${err.message}`);
    } else {
      console.log(`Database Connected Successfully`);
    }
  });
};

export default connectDB;
