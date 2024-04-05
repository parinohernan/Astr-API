import { createConnection, Connection } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const mysqlConfig = {
  host: process.env.HOST_ASTRIAL || "localhost",
  user: process.env.USER_ASTRIAL || "root",
  password: process.env.PASSWORD_ASTRIAL || "45tr14l",
  database: process.env.DATABASE_ASTRIAL || "preventas",
};

export const connectDatabase = async (): Promise<Connection> => {
  const connection = await createConnection(mysqlConfig);
  return connection;
};
