import { Request, Response } from "express";
import Vendedor from "../models/Vendedor";

export const getVendedores = async (req: Request, res: Response) => {
  try {
    const vendedores = await Vendedor.findAll();
    res.json(vendedores);
  } catch (error) {
    console.error("Error al obtener datos de la base de datos:", error);
    res
      .status(500)
      .json({ error: "Error al obtener datos de la base de datos" });
  }
};
