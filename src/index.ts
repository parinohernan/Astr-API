// src/index.ts
import express from "express";
import dotenv from "dotenv";
import vendedoresRoutes from "./routes/vendedoresRoutes";

dotenv.config(); // Cargar variables de entorno desde el archivo .env

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/", vendedoresRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
