import Product from "../models/productModel.js";
import catchAsyncErrorMiddleware from "../middlewares/catchAsyncErrorMiddleware.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import Cart from "../models/cartModel.js";

export const addToCart = catchAsyncErrorMiddleware(async (req, res, next) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);
  if (!product) {
    return next(new ErrorHandler(`Product not found`, 404));
  }
  const oldCart = await Cart.findOne();
0
  await oldCart.updateOne({
    $push: {
      products: product._id,
    },
  });

  await product.updateOne({
    stock: product.stock - 1,
  });

  return res.status(201).json({ message: `Product added to cart` });
});

export const emptyCart = catchAsyncErrorMiddleware(async (req, res, next) => {
  const cart = await Cart.findOne();
  if (!cart) {
    return next(new ErrorHandler(`Cart not found`, 404));
  }
  await cart.updateOne({
    product: [],
  });
  return res.status(200).json({ message: `Cart emptied` });
});

export const getCart = catchAsyncErrorMiddleware(async (req, res, next) => {
  const cart = await Cart.findOne().populate("products");
  if (!cart) {
    return next(new ErrorHandler(`Cart not found`, 404));
  }
  return res.status(200).json({ message: `Cart found`, cart });
});

export const removeProductFromCart = catchAsyncErrorMiddleware(
  async (req, res, next) => {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    const cart = await Cart.findOne();
    if (!cart) {
      return next(new ErrorHandler(`Cart not found`, 404));
    }
    if (!cart.products.includes(productId)) {
      return next(new ErrorHandler(`Product not found in cart`, 404));
    }
    await cart.updateOne({
      $pull: {
        products: product._id,
      },
    });
    await product.updateOne({
      stock: product.stock + 1,
    });
    return res.status(200).json({ message: `Product removed from cart` });
  }
);
