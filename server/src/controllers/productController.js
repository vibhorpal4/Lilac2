import Product from "../models/productModel.js";
import catchAsyncErrorMiddleware from "../middlewares/catchAsyncErrorMiddleware.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const createProduct = catchAsyncErrorMiddleware(
  async (req, res, next) => {
    const { name, price, image, stock } = req.body;

    if (!name || !price || !image) {
      return next(new ErrorHandler(`Please fill all fields`, 400));
    }

    const product = await Product.create({
      name,
      image,
      price,
      stock,
    });

    return res
      .status(201)
      .json({ message: `Product created successfully`, product });
  }
);

export const getAllProducts = catchAsyncErrorMiddleware(
  async (req, res, next) => {
    const prod = await Product.find();
    const products = prod.filter((product) => product.stock > 0);
    return res.status(200).json({ message: `All products`, products });
  }
);
