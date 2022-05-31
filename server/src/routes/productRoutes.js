import express from "express";
import * as productController from "../controllers/productController.js";

const router = express.Router();

router.post("/", productController.createProduct);
router.get("/", productController.getAllProducts);

export default router;
