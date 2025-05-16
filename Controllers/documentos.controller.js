import fs from "fs";
import path from "path";
import User from "../models/user.js";

// Simulación: en vez de BD, guardamos info en archivos JSON por usuario
const UPLOADS_DIR = path.join(process.cwd(), "uploads", "documentos");
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });

// Guardar documento
export const uploadDocument = (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No se subió ningún archivo" });
  // Guardar referencia en un archivo JSON por usuario
  const userId = req.usuario.id_usuario;
  const docInfo = {
    id: Date.now(),
    filename: req.file.filename,
    originalname: req.file.originalname,
    mimetype: req.file.mimetype,
    path: req.file.path,
    estado: "pendiente",
    fecha_subida: new Date(),
  };
  const userDocsPath = path.join(UPLOADS_DIR, `${userId}.json`);
  let docs = [];
  if (fs.existsSync(userDocsPath)) {
    docs = JSON.parse(fs.readFileSync(userDocsPath));
  }
  docs.push(docInfo);
  fs.writeFileSync(userDocsPath, JSON.stringify(docs, null, 2));
  res.status(201).json({ mensaje: "Documento subido", documento: docInfo });
};

// Obtener documentos del usuario autenticado
export const getUserDocuments = (req, res) => {
  const userId = req.usuario.id_usuario;
  const userDocsPath = path.join(UPLOADS_DIR, `${userId}.json`);
  if (!fs.existsSync(userDocsPath)) return res.json([]);
  const docs = JSON.parse(fs.readFileSync(userDocsPath));
  res.json(docs);
};

// Validar documento (admin)
export const validateDocument = (req, res) => {
  const { id } = req.params;
  const { userId, estado } = req.body; // userId: usuario dueño del doc, estado: "aprobado" o "rechazado"
  const userDocsPath = path.join(UPLOADS_DIR, `${userId}.json`);
  if (!fs.existsSync(userDocsPath)) return res.status(404).json({ error: "No hay documentos para este usuario" });
  let docs = JSON.parse(fs.readFileSync(userDocsPath));
  const docIndex = docs.findIndex(d => d.id == id);
  if (docIndex === -1) return res.status(404).json({ error: "Documento no encontrado" });
  docs[docIndex].estado = estado;
  fs.writeFileSync(userDocsPath, JSON.stringify(docs, null, 2));

  // Si el documento es aprobado, cambiar el rol del usuario a "pro"
  if (estado === "aprobado") {
    User.findByPk(userId).then(user => {
      if (user && user.tipo_usuario !== "pro") {
        user.tipo_usuario = "pro";
        user.save();
      }
    });
  }

  res.json({ mensaje: `Documento ${estado}` });
};
