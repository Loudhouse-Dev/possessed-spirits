import express from 'express';
import { Request, Response } from 'express';
import router from './routes/cocktailRoutes';

const app = express();

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/api', router);

export default app;