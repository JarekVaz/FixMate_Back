import { authenticateUser, generateToken } from "../services/auth.services.js";

// Controlador de login
export const login = async (req, res) => {
  const { correo, contraseña } = req.body;
  try {
    const user = await authenticateUser(correo, contraseña);
    if (!user) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }
    const token = generateToken(user);
    res.json({
      token,
      usuario: {
        id_usuario: user.id_usuario,
        nombre: user.nombre,
        correo: user.correo,
        apellido: user.apellido,
        tipo_usuario: user.tipo_usuario,
        verificado: user.verificado,
        estado: user.estado,
        foto_perfil: user.foto_perfil,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
};
