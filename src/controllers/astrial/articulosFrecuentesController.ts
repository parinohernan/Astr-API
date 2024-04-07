import { Request, Response } from "express";
import FacturaCabeza from "../../models/FacturaCabeza";
import FacturaItems from "../../models/FacturaItems";
import { Op } from "sequelize";

export const getArticulosFrecuentes = async (req: Request, res: Response) => {
  try {
    const clienteCodigo = req.query.clienteCodigo as string;
    const fechaDesde = req.query.fechaDesde as string;
    const fechaHasta = req.query.fechaHasta as string;

    // Realiza la consulta para obtener los códigos de artículo frecuentes
    const articulosFrecuentes = await FacturaItems.findAll({
      attributes: ["CodigoArticulo"], // Obtener solo los códigos de artículo
      include: [
        {
          model: FacturaCabeza,
          where: {
            ClienteCodigo: clienteCodigo, // Filtro por clienteCodigo en FacturaCabeza
            Fecha: {
              [Op.between]: [fechaDesde, fechaHasta], // Filtro por fecha
            },
            // Otras condiciones de filtrado si es necesario
          },
          required: true, // INNER JOIN
        },
      ],
      raw: true, // Obtener resultados como objetos JSON simples
    });

    // Extrae los códigos de artículo de los resultados
    const codigosArticuloFrecuentes = articulosFrecuentes.map(
      (articulo) => articulo.CodigoArticulo
    );

    // Devuelve los códigos de artículo frecuentes como respuesta
    res.status(200).json(codigosArticuloFrecuentes);
  } catch (error) {
    console.error("Error al obtener datos de la base de datos:", error);
    res
      .status(500)
      .json({ error: "Error al obtener datos de la base de datos" });
  }
};
