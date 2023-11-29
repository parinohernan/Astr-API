// src/routes/clientesRoutes.ts
import express from "express";
import vendedoresRoutes from "./vendedoresRoutes";
import clientesRoutes from "./clientesRoutes";

const router = express.Router();

// Endpoint para obtener todos los clientes
router.get("/clientes", clientesRoutes);
router.get("/vendedores", vendedoresRoutes);
export default router;
