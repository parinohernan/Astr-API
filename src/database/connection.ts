// src/database/connection.ts
import { createConnection, Connection } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const mysqlConfig = {
  host: process.env.HOST || "localhost",
  user: process.env.USER || "root",
  password: process.env.PASSWORD || "45tr14l",
  database: process.env.DATABASE || "preventas",
};

export const connectDatabase = async (): Promise<Connection> => {
  const connection = await createConnection(mysqlConfig);
  return connection;
};
