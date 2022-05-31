import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    // subTotal: {
    //   type: Number,
    //   required: true,
    // },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
