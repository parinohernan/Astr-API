// src/routes/clientesRoutes.ts
import express from "express";
import vendedoresRoutes from "./vendedoresRoutes";
import clientesRoutes from "./clientesRoutes";
import articulosRoutes from "./articulosRoutes";

const router = express.Router();

// Endpoint para obtener todos los clientes
router.get("/clientes", clientesRoutes);
router.get("/vendedores", vendedoresRoutes);
router.get("/articulos", articulosRoutes);
export default router;
