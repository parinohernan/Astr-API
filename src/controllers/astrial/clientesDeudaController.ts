// import { Request, Response } from "express";
// import { Op, Sequelize } from "sequelize"; // Asegúrate de importar Sequelize
// import FacturaCabeza from "../../models/FacturaCabeza";
// import FacturaItems from "../../models/FacturaItems";
// import { sequelizeAstrial } from "../../config/sequelize.config"; // Importa tu configuración de Sequelize

// export const getClientesDeuda = async (req: Request, res: Response) => {
//   try {
//     const clienteCodigo = req.query.clienteCodigo as string;

//     const facturasImpagas = await FacturaCabeza.findAll({
//       attributes: [
//         "ClienteCodigo",
//         "DocumentoTipo",
//         "DocumentoNumero",
//         "Fecha",
//         "ImporteTotal",
//         "ImportePagado",
//       ], // Asegúrate de que estos nombres coincidan con los definidos en el modelo
//       where: {
//         ClienteCodigo: clienteCodigo, // Filtro por clienteCodigo en FacturaCabeza
//         ImportePagado: { [Op.lt]: Sequelize.col("ImporteTotal") }, // Filtrar facturas impagas
//       },
//       raw: true, // Obtener resultados como objetos JSON simples
//     });

//     res.status(200).json(facturasImpagas);
//   } catch (error) {
//     console.error("Error al obtener datos de la base de datos:", error);
//     res
//       .status(500)
//       .json({ error: "Error al obtener datos de la base de datos" });
//   }
// };
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
function obtenerComprovantes(clienteCodigo: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const query =
      `SELECT Fecha, DocumentoTipo, DocumentoSucursal, DocumentoNumero, ImporteTotal, ImportePagado, 'facturas' as Origen
    FROM facturaCabeza
    WHERE ClienteCodigo = ` +
      clienteCodigo +
      `
      AND Fecha >= DATE_SUB(CURRENT_DATE, INTERVAL 2 MONTH)
      AND Fecha < CURRENT_DATE
    
    UNION ALL
    
    SELECT Fecha, DocumentoTipo, DocumentoSucursal, DocumentoNumero, ImporteTotal as ImporteTotal, NULL as ImportePagado, 'recibos' as Origen
    FROM reciboscabeza
    WHERE ClienteCodigo = ` +
      clienteCodigo +
      `
      AND Fecha >= DATE_SUB(CURRENT_DATE, INTERVAL 2 MONTH)
      AND Fecha < CURRENT_DATE
    
    UNION ALL
    
    SELECT Fecha, DocumentoTipo, DocumentoSucursal, DocumentoNumero, ImporteTotal, ImportePagado, 'nota de debito' as Origen
    FROM notadebitocabeza
    WHERE ClienteCodigo = ` +
      clienteCodigo +
      `
      AND Fecha >= DATE_SUB(CURRENT_DATE, INTERVAL 3 MONTH)
      AND Fecha < CURRENT_DATE
    ORDER BY Fecha DESC;`;

    db.query(query, [clienteCodigo], (err, results) => {
      if (err) {
        return reject(err);
      }
      // const codigosFrecuentes = results.map(
      //   (row: { CodigoArticulo: any }) => row.CodigoArticulo
      // );
      resolve(results);
    });
  });
}

// Controlador Express para manejar la solicitud y respuesta
export default async function getClientesDeuda(req: Request, res: Response) {
  try {
    const clienteCodigo = req.query.clienteCodigo as string;

    if (!clienteCodigo) {
      return res.status(400).json({ error: "clienteCodigo es requerido" });
    }

    const documentos = await obtenerComprovantes(clienteCodigo);

    // Devuelve los códigos de artículo frecuentes como respuesta
    res.status(200).json(documentos);
  } catch (error) {
    console.error("Error al obtener datos de la base de datos:", error);
    res
      .status(500)
      .json({ error: "Error al obtener datos de la base de datos" });
  }
}
