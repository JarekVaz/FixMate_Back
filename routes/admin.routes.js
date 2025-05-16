import { Router } from "express";
import { adminLogin, adminDashboard } from "../Controllers/admin.controller.js";
import { verifyAdminToken } from "../config/middleware.js";

const router = Router();

router.post("/login", adminLogin);
router.get("/dashboard", verifyAdminToken, adminDashboard);

export default router;
