import { Router } from "express";
import { uploadDocument, getUserDocuments, validateDocument } from "../Controllers/documentos.controller.js";
import { verifyToken, verifyAdminToken } from "../config/middleware.js";
import multer from "multer";
import path from "path";

// Configuración de multer para guardar archivos localmente
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/documentos/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, req.usuario.id_usuario + "-" + uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

const router = Router();

// Subir documento (usuario autenticado)
router.post("/", verifyToken, upload.single("documento"), uploadDocument);
// Obtener documentos de un usuario (usuario autenticado)
router.get("/", verifyToken, getUserDocuments);
// Validar documento (admin)
router.patch("/:id/validar", verifyAdminToken, validateDocument);

export default router;
