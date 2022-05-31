//dotenv configuration
dotenv.config();

//importing dependencies
import dotenv from "dotenv";
import app from "./configs/app.js";
import connectDB from "./configs/db.js";

//importing routes
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

//Handling Uncaught Exception
process.on("uncaughtException", (error) => {
  console.log(`Error: ${error.message}`);
  console.log(`Shutting down server due to Uncaught Exception`);
  process.exit(1);
});

//initilizing routes or making apis
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/cart", cartRoutes);

//connecting Datanbase
connectDB();

//initializing PORT
const PORT = process.env.PORT || 5000;

//  Starting Server
app.listen(PORT, (err) => {
  if (err) {
    console.log(`Something went wrong in server connection: ${err.message}`);
  } else {
    console.log(`Server is connected on PORT: ${PORT}`);
  }
});

//handle Promise Rejection
process.on("unhandledRejection", (error) => {
  console.log(`Error: ${error.message}`);
  console.log(`Shutting down server due to Unhandled Promise Rejection`);
});
