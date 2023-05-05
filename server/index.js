import express from 'express';
import { sequelize } from './db.js';
import { config } from 'dotenv';

config();

import cors from 'cors';

import { router as articleRouter } from './routes/articleRoute.js';
import { router as commentRouter } from './routes/commentRoute.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/article', articleRouter);
app.use('/comment', commentRouter);

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
