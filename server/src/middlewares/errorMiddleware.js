import ErrorHandler from "../utils/ErrorHandler.js";

const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || `Internal Server Error`;

  res.status(err.statusCode).json({ message: err.message });
};

export default errorMiddleware;
