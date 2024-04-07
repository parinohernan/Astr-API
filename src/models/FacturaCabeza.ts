// src/models/facturaCabeza.ts
import { DataTypes, Model } from "sequelize";
import { sequelizeAstrial } from "../config/sequelize.config";
// import FacturaItems from "./facturaItems";

class FacturaCabeza extends Model {
  public DocumentoTipo!: string;
  public DocumentoSucursal!: string;
  public DocumentoNumero!: string;
  public Fecha!: Date;
  public ClienteCodigo!: string;
  public VendedorCodigo!: string;
  public PagoTipo!: string;
  public ImporteBruto!: number;
  // public PorcentajeBonificacion!: number;
  public ImporteBonificado!: number;
  public ListaNumero!: number;
  public Observacion!: string;
}

FacturaCabeza.init(
  {
    DocumentoTipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DocumentoSucursal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DocumentoNumero: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ClienteCodigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    VendedorCodigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ImporteTotal: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    ImporteBruto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    ImporteBonificado: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    ListaNumero: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    Observacion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PagoTipo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeAstrial,
    modelName: "FacturaCabeza",
    tableName: "facturacabeza",
    timestamps: false,
  }
);

export default FacturaCabeza;
