// Controladores para trabajadores
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import User from "../models/user.js";

// Simulación: deberías tener un modelo Trabajador real
export const getTrabajadores = async (req, res) => {
  // Aquí deberías hacer un JOIN real si tienes modelo Trabajador
  try {
    const trabajadores = await User.findAll({ where: { tipo_usuario: "prof" }, attributes: ["id_usuario", "nombre", "apellido", "correo"] });
    res.json(trabajadores);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener trabajadores" });
  }
};

export const createTrabajador = async (req, res) => {
  // Aquí deberías crear un trabajador real
  try {
    // Ejemplo: solo cambia el tipo_usuario
    const { id_usuario } = req.usuario;
    const user = await User.findByPk(id_usuario);
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    user.tipo_usuario = "prof";
    await user.save();
    res.status(201).json({ mensaje: "Trabajador registrado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al registrar trabajador" });
  }
};

export const getTrabajadorPagina = async (req, res) => {
  // Simulación: genera HTML simple
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "Trabajador no encontrado" });
    const html = `<html><body><h1>Perfil de ${user.nombre} ${user.apellido}</h1><p>Email: ${user.correo}</p></body></html>`;
    res.setHeader("Content-Type", "text/html");
    res.send(html);
  } catch (error) {
    res.status(500).json({ error: "Error al generar página de trabajador" });
  }
};
