// controllers/preventaController.ts
import { Request, Response } from "express";
import PreventaCabeza from "../models/PreventaCabeza";
import PreventaItem from "../models/PreventaItems";

export const crearPreventa = async (req: Request, res: Response) => {
  try {
    const {
      DocumentoTipo,
      DocumentoSucursal,
      DocumentoNumero,
      ClienteCodigo,
      VendedorCodigo,
      Fecha,
      FechaHoraEnvio,
      ImporteTotal,
      Cant_items,
      Observacion,
      items,
      ListaNumero,
      ImporteBonificado,
      PagoTipo,
    } = req.body;

    // Insertar en preventa_cabeza
    const preventaCabeza = await PreventaCabeza.create({
      DocumentoTipo,
      DocumentoSucursal,
      DocumentoNumero,
      ClienteCodigo,
      VendedorCodigo,
      Fecha,
      FechaHoraEnvio,
      ImporteTotal,
      Cant_items,
      Observacion,
      ListaNumero,
      ImporteBonificado,
      ImporteBruto: ImporteTotal,
      PagoTipo,
    });

    // Insertar en preventa_item
    let idCreado: number = +preventaCabeza.DocumentoNumero * 100; // no me permitira mas de 999 items por preventa
    for (const item of items) {
      idCreado++;
      // console.log("Body items :", item, "id ", idCreado);
      await PreventaItem.create({
        DocumentoTipo: preventaCabeza.DocumentoTipo,
        DocumentoSucursal: preventaCabeza.DocumentoSucursal,
        DocumentoNumero: preventaCabeza.DocumentoNumero,
        CodigoArticulo: item.CodigoArticulo,
        Cantidad: item.Cantidad,
        PrecioUnitario: item.PrecioUnitario,
        PrecioLista: item.PrecioLista,
        PorcentajeBonificacion: item.PorcentajeBonificacion,
        id: idCreado,
      });
    }

    res.status(201).json({ message: "Preventa creada exitosamente" });
  } catch (error) {
    console.error("Error al crear preventa:", error);
    res.status(500).json({ message: "Error al crear preventa" });
  }
};