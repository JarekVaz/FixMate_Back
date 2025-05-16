import jwt from "jsonwebtoken";
import User from "../models/user.js";

// Simulación: deberías tener un modelo Administrador real
export const adminLogin = async (req, res) => {
  const { nombre, contrasena } = req.body;
  // Aquí deberías buscar en la tabla de administradores
  if (nombre === "admin" && contrasena === "admin") {
    const token = jwt.sign({ nombre, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return res.json({ token, admin: { nombre } });
  }
  res.status(401).json({ error: "Credenciales inválidas" });
};

export const adminDashboard = async (req, res) => {
  // Aquí deberías consultar datos reales
  res.json({ admin: req.admin, stats: { usuarios: 0, trabajadores: 0 } });
};
