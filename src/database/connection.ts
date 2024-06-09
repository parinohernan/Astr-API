// src/database/connection.ts
import { createConnection, Connection } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const mysqlConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export const connectDatabase = async (): Promise<Connection> => {
  const connection = await createConnection(mysqlConfig);
  return connection;
};
