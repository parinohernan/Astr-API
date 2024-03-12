// creo que este modelo no se usa

import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize.config";

class Preventa extends Model {
  public DocumentoTipo!: string;
  public DocumentoSucursal!: string;
  public DocumentoNumero!: string;
  public Fecha!: Date;
  public FechaHoraEnvio!: Date;
  public ClienteCodigo!: string;
  public VendedorCodigo!: string;
  public PagoTipo!: string;
  public ImporteBruto!: number;
  public PorcentajeBonificacion!: number;
  public ImporteBonificado!: number;
  public ImporteNeto!: number;
  public ImporteAdicional!: number;
  public ImporteIva1!: number;
  public ImporteIva2!: number;
  public ImporteTotal!: number;
  public ImportePagado!: number;
  public PorcentajeIva1!: number;
  public PorcentajeIva2!: number;
  public ListaNumero!: number;
  public FechaAnulacion!: Date;
  public cant_items!: number;
  public Observacion!: string;
  public Latitud!: number;
  public Longitud!: number;

  // Campos específicos de preventa_items
  public id_preventa_item!: number; // Ajusta este campo según tu esquema
}

Preventa.init(
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
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    FechaHoraEnvio: {
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
    PagoTipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ImporteBruto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    PorcentajeBonificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ImporteBonificado: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    ImporteNeto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    ImporteAdicional: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    ImporteIva1: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    ImporteIva2: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    ImporteTotal: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    ImportePagado: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    PorcentajeIva1: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    PorcentajeIva2: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    ListaNumero: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    FechaAnulacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cant_items: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Observacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Latitud: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    Longitud: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },

    // Campos específicos de preventa_items
    id_preventa_item: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // ... otros campos específicos de preventa_items
  },
  {
    sequelize,
    modelName: "Preventa",
    tableName: "preventa_cabeza",
    timestamps: false, // Ajusta esto según tus necesidades
  }
);

export default Preventa;
