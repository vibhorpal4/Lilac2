import User from "../models/userModel.js";
import catchAsyncErrorMiddleware from "../middlewares/catchAsyncErrorMiddleware.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import tokenGenerator from "../utils/tokenGenerator.js";
import bcrypt from "bcrypt";

export const register = catchAsyncErrorMiddleware(async (req, res, next) => {
  const { email, password, username } = req.body;

  if (!email || !password || !username) {
    return next(new ErrorHandler(`Please fill all fields`, 404));
  }

  const isEmail = await User.findOne({ email });

  if (isEmail) {
    return next(new ErrorHandler(`Email is already in use`, 400));
  }
  const isUsername = await User.findOne({ username });
  if (isUsername) {
    return next(new ErrorHandler(`Username already in use`, 400));
  }

  const user = await User.create({
    username,
    email,
    password,
  });

  return tokenGenerator(user, 201, res, `User registration successfull`);
});

export const login = catchAsyncErrorMiddleware(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler(`Please fill all the fields`, 400));
  }

  const user = await User.findOne({ email });

  if (!user) {
    return next(new ErrorHandler(`Invalid Credentials`, 401));
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return next(new ErrorHandler(`Invalid Credentials`, 401));
  }

  return tokenGenerator(user, 201, res, `Login successfull`);
});

export const logout = catchAsyncErrorMiddleware(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({ message: `Logout Successfull` });
});
