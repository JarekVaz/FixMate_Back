import Log from "../models/log.js";

// Controlador para logs
export const createLog = async (req, res) => {
  // Se espera que el frontend envíe: { accion, descripcion, id_usuario, ip_origen, user_agent }
  const { accion, descripcion, id_usuario, ip_origen, user_agent } = req.body;
  try {
    await Log.create({
      accion,
      descripcion,
      id_usuario: id_usuario || null,
      ip_origen: ip_origen || req.ip,
      user_agent: user_agent || req.headers['user-agent'],
      fecha: new Date(),
    });
    res.status(201).json({ mensaje: "Log registrado" });
  } catch (error) {
    res.status(500).json({ error: "Error al registrar log" });
  }
};
