import { Router } from "express";
import { getTrabajadores, createTrabajador, getTrabajadorPagina } from "../Controllers/trabajadores.controller.js";
import { verifyToken } from "../config/middleware.js";

const router = Router();

router.get("/", getTrabajadores);
router.post("/", verifyToken, createTrabajador);
router.get("/:id/pagina", getTrabajadorPagina);

export default router;
