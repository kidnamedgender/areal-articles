import express from 'express';
import { sequelize } from './db.js';
import { config } from 'dotenv';

config();

import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(process.env.PORT, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log('Server start on port ' + process.env.PORT);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
