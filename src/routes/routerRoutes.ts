// src/routes/clientesRoutes.ts
import express from "express";
import vendedoresRoutes from "./vendedoresRoutes";
import clientesRoutes from "./clientesRoutes";
import articulosRoutes from "./articulosRoutes";
import { crearPreventa } from "../controllers/preventasController";

const router = express.Router();

// Endpoint para obtener todos los clientes
router.get("/", (req, res) => {
  res.send("OK- el servidor esta online.");
});
router.get("/clientes", clientesRoutes);
router.get("/vendedores", vendedoresRoutes);
router.get("/articulos", articulosRoutes);
router.get("/articulosfrecuentes", articulosRoutes);
router.post("/preventas", crearPreventa);
export default router;
