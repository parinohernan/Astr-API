// src/index.ts
import express from "express";
import dotenv from "dotenv";
import vendedoresRoutes from "./routes/vendedoresRoutes";
import { sequelize } from "./config/sequelize.config";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/", vendedoresRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Conexión a la base de datos exitosa");

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) =>
    console.error("Error al conectar con la base de datos:", error)
  );
