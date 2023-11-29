// src/models/Vendedor.ts
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize.config";

class Vendedor extends Model {
  public codigo!: number;
  public descripcion!: string;
  public clave!: string;
}

Vendedor.init(
  {
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "Codigo",
      primaryKey: true,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "Descripcion", // Especifica el nombre de la columna en la base de datos
    },
    clave: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "Clave", // Especifica el nombre de la columna en la base de datos
    },
  },
  {
    sequelize,
    modelName: "Vendedor", // nombre del modelo
    tableName: "t_vendedores", // especifica el nombre de la tabla en la base de datos
    timestamps: false, // Deshabilita las marcas de tiempo
  }
);

export default Vendedor;
