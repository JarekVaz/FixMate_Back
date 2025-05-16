import { Router } from "express";
import { login } from "../Controllers/login.controller.js";

const router = Router();

router.post("/", login);

export default router;
