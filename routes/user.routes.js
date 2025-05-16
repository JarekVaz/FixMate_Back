import { Router } from "express";
import { registerUser, getUsers, updateUserRole } from "../Controllers/user.controller.js";

const router = Router();

router.post("/registro", registerUser);
router.get("/", getUsers);
router.patch("/:id/rol", updateUserRole);

export default router;
