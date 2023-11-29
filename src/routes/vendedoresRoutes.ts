// src/routes/vendedoresRoutes.ts
import express from "express";
import { getVendedores } from "../controllers/vendedoresController";

const router = express.Router();

// Ruta para obtener datos de la tabla t_vendedores
router.get("/vendedores", getVendedores);

export default router;
