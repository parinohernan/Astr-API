import { DataTypes, Model } from "sequelize";
import { sequelizeAstrial } from "../config/sequelize.config";
import FacturaCabeza from "./FacturaCabeza";

class FacturaItems extends Model {
  public DocumentoTipo!: string;
  public DocumentoSucursal!: string;
  public DocumentoNumero!: string;
  public CodigoArticulo!: string;
  public Cantidad!: number;
  public PrecioUnitario!: number;
  public PrecioLista!: number;
}

FacturaItems.init(
  {
    DocumentoTipo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    DocumentoSucursal: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    DocumentoNumero: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
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
  },
  {
    sequelize: sequelizeAstrial,
    modelName: "FacturaItems",
    tableName: "facturaitems",
    timestamps: false,
  }
);

// Establecer la relación con la tabla FacturaCabeza
FacturaItems.belongsTo(FacturaCabeza, {
  foreignKey: {
    name: "DocumentoTipo",
    field: "DocumentoTipo",
  },
  targetKey: "DocumentoTipo",
  as: "facturaCabezaTipo",
});
FacturaItems.belongsTo(FacturaCabeza, {
  foreignKey: {
    name: "DocumentoSucursal",
    field: "DocumentoSucursal",
  },
  targetKey: "DocumentoSucursal",
  as: "facturaCabezaSucursal",
});
FacturaItems.belongsTo(FacturaCabeza, {
  foreignKey: {
    name: "DocumentoNumero",
    field: "DocumentoNumero",
  },
  targetKey: "DocumentoNumero",
  as: "facturaCabezaNumero",
});

export default FacturaItems;
