// src/models/Articulo.ts
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize.config";

class Articulo extends Model {
  public codigo!: string;
  public descripcion!: string;
  public existencia!: number;
  public existenciaMinima!: number;
  public existenciaMaxima!: number;
  public precioCostoMasImp!: number;
  public porcentajeIVA1!: number;
  public porcentajeIVA2!: number;
  public precioCosto!: number;
  public unidadVenta!: string;
  public lista1!: number;
  public lista2!: number;
  public lista3!: number;
  public lista4!: number;
  public lista5!: number;
  public proveedorCodigo!: string;
  public rubroCodigo!: string;
  public peso!: number;
  public siempreSeDescarga!: boolean;
  public iva2SobreNeto!: boolean;
  public porcentajeVendedor!: number;
  public descuentoXCantidad!: string;

  // timestamps por defecto en Sequelize, puedes personalizar esto si es necesario
}

Articulo.init(
  {
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      field: "Codigo",
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "Descripcion",
    },
    existencia: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
      field: "Existencia",
    },
    // existenciaMinima: {
    //   type: DataTypes.DOUBLE,
    //   allowNull: false,
    //   defaultValue: 0,
    //   field: "ExistenciaMinima",
    // },
    // existenciaMaxima: {
    //   type: DataTypes.DOUBLE,
    //   allowNull: false,
    //   defaultValue: 0,
    //   field: "ExistenciaMaxima",
    // },
    precioCostoMasImp: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
      field: "PrecioCostoMasImp",
    },
    porcentajeIVA1: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
      field: "PorcentajeIVA1",
    },
    // porcentajeIVA2: {
    //   type: DataTypes.DOUBLE,
    //   allowNull: false,
    //   defaultValue: 0,
    //   field: "PorcentajeIVA2",
    // },
    precioCosto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
      field: "PrecioCosto",
    },
    unidadVenta: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "UnidadVenta",
    },
    lista1: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
      field: "Lista1",
    },
    lista2: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
      field: "Lista2",
    },
    lista3: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
      field: "Lista3",
    },
    lista4: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
      field: "Lista4",
    },
    lista5: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
      field: "Lista5",
    },
    // proveedorCodigo: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   field: "ProveedorCodigo",
    // },
    rubroCodigo: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "RubroCodigo",
    },
    // peso: {
    //   type: DataTypes.DOUBLE,
    //   allowNull: false,
    //   defaultValue: 0,
    //   field: "Peso",
    // },
    // siempreSeDescarga: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   field: "SiempreSeDescarga",
    // },
    // iva2SobreNeto: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   field: "Iva2SobreNeto",
    // },
    // porcentajeVendedor: {
    //   type: DataTypes.DOUBLE,
    //   allowNull: false,
    //   defaultValue: 0,
    //   field: "PorcentajeVendedor",
    // },
    // descuentoXCantidad: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   field: "DescuentoXCantidad",
    // },
    // ... otros campos según tu esquema
  },
  {
    sequelize,
    modelName: "Articulo",
    tableName: "t_articulos",
    timestamps: false, // Puedes ajustar esto según tus necesidades
  }
);

export default Articulo;
