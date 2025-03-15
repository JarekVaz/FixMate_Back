import { app, PORT } from "./config/server.js";
import colors from "colors";

app.listen(PORT, () => {
  console.log(
    colors.green.bold(`Servidor iniciado en http://localhost:${PORT}`)
  );
});
