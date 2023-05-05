import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
config();

export const sequelize = new Sequelize(
  process.env.NAME,
  process.env.USER,
  process.env.PASSWORD,

  {
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
  },
);
