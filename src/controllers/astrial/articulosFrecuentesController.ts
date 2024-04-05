// src/controllers/articulosController.ts
import { Request, Response } from "express";
import ArticulosFrecuentes from "../../models/ArticulosFrecuentes";

// Obtener todos los artículos
const Articulo = ArticulosFrecuentes;
export const getArticulos = async (req: Request, res: Response) => {
  try {
    const articulos = await Articulo.findAll();
    res.json(articulos);
  } catch (error) {
    console.error("Error al obtener artículos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
