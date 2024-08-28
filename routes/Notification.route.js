import express from "express";
import { protectRoute } from "../middleware/ProtectRoute.js";
import {
  deleteNotifications,
  getNotifications,
} from "../controllers/Notification.controller.js";

const router = express.Router();

router.get("/", protectRoute, getNotifications);
router.delete("/", protectRoute, deleteNotifications);

export default router;
