import User from "../models/user.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { nombre, apellido, correo, contrasena, telefono, tipo_usuario } = req.body;
    // Verificar si el correo ya existe
    const exists = await User.findOne({ where: { correo } });
    if (exists) {
      return res.status(400).json({ error: "El correo ya está registrado" });
    }
    const user = await User.create({
      nombre,
      apellido,
      correo,
      contrasena,
      telefono,
      tipo_usuario,
      fecha_registro: new Date(),
      estado: "activo",
      verificado: false,
    });
    const token = jwt.sign(
      { id_usuario: user.id_usuario, correo: user.correo, nombre: user.nombre },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(201).json({
      mensaje: "Usuario registrado exitosamente",
      token,
      usuario: {
        id_usuario: user.id_usuario,
        nombre: user.nombre,
        correo: user.correo,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Error al registrar usuario" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: ["id_usuario", "nombre", "correo"] });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

export const updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { tipo_usuario } = req.body;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    user.tipo_usuario = tipo_usuario;
    await user.save();
    res.json({ mensaje: `Rol actualizado a ${tipo_usuario}` });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el rol del usuario" });
  }
};
