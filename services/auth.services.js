import User from "../models/user.js";
import jwt from "jsonwebtoken";

export const authenticateUser = async (correo, contraseña) => {
  const user = await User.findOne({ where: { correo } });
  if (!user) return null;
  // Comparación simple, asumiendo passwords sin hash
  if (user.contraseña !== contraseña) return null;
  return user;
};

export const generateToken = (user) => {
  return jwt.sign(
    { id_usuario: user.id_usuario, correo: user.correo, nombre: user.nombre },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};
