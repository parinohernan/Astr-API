// src/models/PreventaItems.ts
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize.config";
// import PreventaCabeza from "./PreventaCabeza";

class PreventaItems extends Model {
  public DocumentoTipo!: string;
  public DocumentoSucursal!: string;
  public DocumentoNumero!: string;
  public CodigoArticulo!: string;
  public Cantidad!: number;
  public PrecioUnitario!: number;
  public PrecioLista!: number;
  public PorcentajeBonificacion!: number;
  public id_preventa_item!: number; // Ajusta este campo según tu esquema

  // Otros campos específicos de preventa_items
}

PreventaItems.init(
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
    CodigoArticulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Cantidad: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    PrecioUnitario: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    // PrecioLista: {
    //   type: DataTypes.DOUBLE,
    //   allowNull: false,
    // },
    PorcentajeBonificacion: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },

    // Campos específicos de preventa_items
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    // ... otros campos específicos de preventa_items
  },
  {
    sequelize,
    modelName: "PreventaItems",
    tableName: "preventa_items",
    timestamps: false, // Ajusta esto según tus necesidades
  }
);
// Establece la relación con la tabla preventa_cabeza
// PreventaItems.belongsTo(PreventaCabeza, {
//   foreignKey: {
//     name: "DocumentoTipo",
//     field: "DocumentoTipo",
//   },
//   targetKey: "DocumentoTipo",
// });

// PreventaItems.belongsTo(PreventaCabeza, {
//   foreignKey: {
//     name: "DocumentoSucursal",
//     field: "DocumentoSucursal",
//   },
//   targetKey: "DocumentoSucursal",
// });

// PreventaItems.belongsTo(PreventaCabeza, {
//   foreignKey: {
//     name: "DocumentoNumero",
//     field: "DocumentoNumero",
//   },
//   targetKey: "DocumentoNumero",
// });

export default PreventaItems;
