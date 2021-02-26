import express from 'express';
import cors from 'cors';
import './configs/config';

import 'reflect-metadata';
import 'express-async-errors';

import routes from './routes/index';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

// app.get('/', (req, res) => res.send('Hello World!'));
app.listen(process.env.PORT, () => console.log(`🔥 server listening on port ${process.env.PORT}`));
