import express from "express";
import { getArticulos } from "../controllers/articulosController";

const router = express.Router();

// Endpoint para obtener todos los artículos
router.get("/articulos", getArticulos);

export default router;
