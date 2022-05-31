import { Router } from "express";
import * as authController from "../controllers/authController.js";

//initilizing router
const router = Router();

//defining routes
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

export default router;
