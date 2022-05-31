import express from "express";

import * as cartController from "../controllers/cartController.js";

const router = express.Router();

router.post("/:productId", cartController.addToCart);
router.get("/", cartController.getCart);
router.put("/", cartController.emptyCart);
router.put("/remove/:productId", cartController.removeProductFromCart);

export default router;
