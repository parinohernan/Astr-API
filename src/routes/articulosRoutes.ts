import express from "express";
import { getArticulos } from "../controllers/articulosController";
import { getArticulosFrecuentes } from "../controllers/astrial/articulosFrecuentesController";
const router = express.Router();

// Endpoint para obtener todos los artículos
router.get("/articulos", getArticulos);

// Endpoint para obtener los artículos más frecuentes de un cliente
router.get("/articulosfrecuentes", getArticulosFrecuentes);
export default router;
