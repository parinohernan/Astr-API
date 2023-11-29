// src/models/Cliente.ts
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize.config";

class Cliente extends Model {
  public codigo!: string;
  public descripcion!: string;
  public cuit!: string;
  public calle!: string;
  public numero!: string;
  public piso!: string;
  public departamento!: string;
  public codigoPostal!: string;
  public localidad!: string;
  public telefono!: string;
  public mail!: string;
  public contactoComercial!: string;
  public categoriaIva!: string;
  public listaPrecio!: string;
  public importeDeuda!: number;
  public codigoVendedor!: string;
  public actualizado!: boolean;
  public saldoNTCNoAplicado!: number;
  public limiteCredito!: number;
}

Cliente.init(
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
    cuit: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "Cuit",
    },
    calle: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "Calle",
    },
    numero: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "Numero",
    },
    piso: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "Piso",
    },
    departamento: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "Departamento",
    },
    codigoPostal: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "CodigoPostal",
    },
    localidad: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "Localidad",
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "Telefono",
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "Mail",
    },
    contactoComercial: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "ContactoComercial",
    },
    categoriaIva: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "CategoriaIva",
    },
    listaPrecio: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "ListaPrecio",
    },
    importeDeuda: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
      field: "ImporteDeuda",
    },
    codigoVendedor: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "CodigoVendedor",
    },
    actualizado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: "Actualizado",
    },
    saldoNTCNoAplicado: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
      field: "SaldoNTCNoAplicado",
    },
    limiteCredito: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
      field: "LimiteCredito",
    },
    // ... otros campos según tu esquema
  },
  {
    sequelize,
    modelName: "Cliente",
    tableName: "t_clientes",
    timestamps: false, // Puedes ajustar esto según tus necesidades
  }
);

export default Cliente;
