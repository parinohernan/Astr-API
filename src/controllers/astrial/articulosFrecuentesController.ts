import mysql from "mysql";
import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection({
  host: process.env.HOST_ASTRIAL || "localhost",
  user: process.env.DB_USER_ASTRIAL,
  password: process.env.DB_PASSWORD_ASTRIAL,
  database: process.env.DB_NAME_ASTRIAL,
});

// Conectar a la base de datos
db.connect((err: any) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log("Conectado a la base de datos.");
});

// Función para obtener los artículos frecuentes desde la base de datos
function obtenerArticulosFrecuentes(clienteCodigo: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const query = `SELECT DISTINCT facturaItems.CodigoArticulo
                  FROM facturaItems
                  JOIN facturaCabeza ON facturaItems.DocumentoNumero = facturaCabeza.DocumentoNumero
                  AND facturaItems.DocumentoSucursal = facturaCabeza.DocumentoSucursal
                  AND facturaItems.DocumentoTipo = facturaCabeza.DocumentoTipo
                  JOIN t_articulos ON facturaItems.CodigoArticulo = t_articulos.codigo
                  AND t_articulos.Activo = 1
                  AND t_articulos.SeVende = 1
                  WHERE facturaCabeza.ClienteCodigo = ?`;

    db.query(query, [clienteCodigo], (err, results) => {
      if (err) {
        return reject(err);
      }
      const codigosFrecuentes = results.map(
        (row: { CodigoArticulo: any }) => row.CodigoArticulo
      );
      resolve(codigosFrecuentes);
    });
  });
}

// Controlador Express para manejar la solicitud y respuesta
export default async function getArticulosFrecuentes(
  req: Request,
  res: Response
) {
  try {
    const clienteCodigo = req.query.clienteCodigo as string;

    if (!clienteCodigo) {
      return res.status(400).json({ error: "clienteCodigo es requerido" });
    }

    const articulosFrecuentes = await obtenerArticulosFrecuentes(clienteCodigo);

    // Devuelve los códigos de artículo frecuentes como respuesta
    res.status(200).json(articulosFrecuentes);
  } catch (error) {
    console.error("Error al obtener datos de la base de datos:", error);
    res
      .status(500)
      .json({ error: "Error al obtener datos de la base de datos" });
  }
}
