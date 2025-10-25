import express from "express";
import { publicRoute, protectedRoute } from "../controllers/mainController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/public", publicRoute);
router.get("/protected", authMiddleware, protectedRoute);

export default router;
