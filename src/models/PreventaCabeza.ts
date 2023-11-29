// src/models/PreventaCabeza.ts
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize.config";
import PreventaItem from "./PreventaItem"; // Importa el modelo de PreventaItem

class PreventaCabeza extends Model {
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

  // Relación con la tabla preventa_item
  public items!: PreventaItem[];
}

PreventaCabeza.init(
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
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    FechaAnulacion: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    cant_items: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Observacion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Latitud: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    Longitud: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    // ... otros campos específicos de preventa_cabeza
  },
  {
    sequelize,
    modelName: "PreventaCabeza",
    tableName: "preventa_cabeza",
    timestamps: false,
  }
);

// Establece la relación con la tabla preventa_item
// Establece las relaciones con la tabla preventa_item
PreventaCabeza.hasMany(PreventaItem, {
  foreignKey: {
    name: "DocumentoTipo", // Campo de relación en PreventaItem
    field: "DocumentoTipo", // Campo de relación en PreventaCabeza
  },
  sourceKey: "DocumentoTipo", // Campo en PreventaCabeza que coincide con el campo en PreventaItem
  as: "itemsTipo", // Alias para la relación
});

PreventaCabeza.hasMany(PreventaItem, {
  foreignKey: {
    name: "DocumentoSucursal",
    field: "DocumentoSucursal",
  },
  sourceKey: "DocumentoSucursal",
  as: "itemsSucursal",
});

PreventaCabeza.hasMany(PreventaItem, {
  foreignKey: {
    name: "DocumentoNumero",
    field: "DocumentoNumero",
  },
  sourceKey: "DocumentoNumero",
  as: "itemsNumero",
});

export default PreventaCabeza;
