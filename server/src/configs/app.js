import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorMiddleware from "../middlewares/errorMiddleware.js";

//initializing app or server
const app = express();

//applying middlewares
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//applying custom middlewares
app.use(errorMiddleware);

export default app;
