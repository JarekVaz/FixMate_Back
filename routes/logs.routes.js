import { Router } from "express";
import { createLog } from "../Controllers/logs.controller.js";

const router = Router();

router.post("/", createLog);

export default router;
