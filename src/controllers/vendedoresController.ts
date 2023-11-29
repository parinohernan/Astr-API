// src/controllers/vendedoresController.ts
import { Request, Response } from "express";
import { connectDatabase } from "../database/connection";

export const getVendedores = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const connection = await connectDatabase();

    const [rows] = await connection.execute("SELECT * FROM t_vendedores");

    await connection.end();

    res.json(rows);
  } catch (error) {
    console.error("Error al obtener datos de la base de datos:", error);
    res
      .status(500)
      .json({ error: "Error al obtener datos de la base de datos" });
  }
};
