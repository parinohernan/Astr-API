// src/controllers/articulosController.ts
import { Request, Response } from "express";
import Articulo from "../models/Articulo";

// Obtener todos los artículos
export const getArticulos = async (req: Request, res: Response) => {
  try {
    const articulos = await Articulo.findAll();
    res.json(articulos);
  } catch (error) {
    console.error("Error al obtener artículos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
