// src/routes/clientesRoutes.ts
import express from "express";
import { getClientes } from "../controllers/clientesController";
import getClientesDeuda from "../controllers/astrial/clientesDeudaController";

const router = express.Router();

// Endpoint para obtener todos los clientes
router.get("/clientes", getClientes);

// endpoint para obtener los doc de deuda
router.get("/clientesdeuda", getClientesDeuda);
export default router;
