import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import 'reflect-metadata';
import 'express-async-errors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  return res.send('Hello World!');  
});

app.listen(process.env.PORT, () => console.log(`🔥 server listening on port ${process.env.PORT}`));

