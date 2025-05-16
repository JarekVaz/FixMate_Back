import { Router } from "express";
import authRoutes from "./auth.routes.js";
import loginRoutes from "./login.routes.js";
import logsRoutes from "./logs.routes.js";
import userRoutes from "./user.routes.js";
import adminRoutes from "./admin.routes.js";
import trabajadoresRoutes from "./trabajadores.routes.js";
import documentosRoutes from "./documentos.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/login", loginRoutes);
router.use("/logs", logsRoutes);
router.use("/usuarios", userRoutes);
router.use("/admin", adminRoutes);
router.use("/trabajadores", trabajadoresRoutes);
router.use("/documentos", documentosRoutes);

export default router;
