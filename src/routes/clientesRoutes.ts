// src/routes/clientesRoutes.ts
import express from "express";
import { getClientes } from "../controllers/clientesController";

const router = express.Router();

// Endpoint para obtener todos los clientes
router.get("/clientes", getClientes);

export default router;
