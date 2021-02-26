import { Router, Request, Response } from 'express';
import stringify from 'json-stringify-safe';
import tmdbApi from '../services/tmdbApi';

const routes = Router();

routes.get('/', async (req: Request, res: Response) => {
  const response = await tmdbApi.getHomeList();

  res.status(200).send(stringify(response));
});

export default routes;
