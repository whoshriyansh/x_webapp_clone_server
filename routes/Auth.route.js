import express from "express";
import {
  getMe,
  login,
  logout,
  signup,
} from "../controllers/Auth.controller.js";
import { protectRoute } from "../middleware/ProtectRoute.js";

const router = express.Router();

router.get("/me", protectRoute, getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
