import { Request, Response } from "express";
import { Op, Sequelize } from "sequelize"; // Asegúrate de importar Sequelize
import FacturaCabeza from "../../models/FacturaCabeza";
import FacturaItems from "../../models/FacturaItems";
import { sequelizeAstrial } from "../../config/sequelize.config"; // Importa tu configuración de Sequelize

export const getClientesDeuda = async (req: Request, res: Response) => {
  try {
    const clienteCodigo = req.query.clienteCodigo as string;

    const facturasImpagas = await FacturaCabeza.findAll({
      attributes: [
        "ClienteCodigo",
        "DocumentoTipo",
        "DocumentoNumero",
        "Fecha",
        "ImporteTotal",
        "ImportePagado",
      ], // Asegúrate de que estos nombres coincidan con los definidos en el modelo
      where: {
        ClienteCodigo: clienteCodigo, // Filtro por clienteCodigo en FacturaCabeza
        ImportePagado: { [Op.lt]: Sequelize.col("ImporteTotal") }, // Filtrar facturas impagas
      },
      raw: true, // Obtener resultados como objetos JSON simples
    });

    res.status(200).json(facturasImpagas);
  } catch (error) {
    console.error("Error al obtener datos de la base de datos:", error);
    res
      .status(500)
      .json({ error: "Error al obtener datos de la base de datos" });
  }
};
