import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "preventas",
});

const sequelizeAstrial = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST_ASTRIAL || "localhost",
  username: process.env.DB_USER_ASTRIAL || "root",
  password: process.env.DB_PASSWORD_ASTRIAL || "",
  database: process.env.DB_NAME_ASTRIAL || "db_sis_fac",
});
export { sequelize, sequelizeAstrial };
