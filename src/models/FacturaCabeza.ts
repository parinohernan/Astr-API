import { DataTypes, Model } from "sequelize";
import { sequelizeAstrial } from "../config/sequelize.config";
import FacturaItems from "./FacturaItems";

class FacturaCabeza extends Model {
  public DocumentoTipo!: string;
  public DocumentoSucursal!: string;
  public DocumentoNumero!: string;
  public Fecha!: Date;
  public ClienteCodigo!: string;
  public VendedorCodigo!: string;
  public PagoTipo!: string;
  public ImporteBruto!: number;
  public ImporteBonificado!: number;
  public ListaNumero!: number;
  public Observacion!: string;
}

FacturaCabeza.init(
  {
    DocumentoTipo: {
      type: DataTypes.STRING,
      allowNull: false,
      // primaryKey: true,
    },
    DocumentoSucursal: {
      type: DataTypes.STRING,
      allowNull: false,
      // primaryKey: true,
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
      type: DataTypes.INTEGER,
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

// Definir relación con FacturaItems
// FacturaCabeza.hasMany(FacturaItems, {
//   foreignKey: "FacturaCabezaId",
//   onDelete: "CASCADE",
// });

export default FacturaCabeza;
