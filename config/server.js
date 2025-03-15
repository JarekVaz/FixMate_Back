import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

// Configuración de variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
  res.send("Bienvenido a FixMate Backend");
});

export { app, PORT };
