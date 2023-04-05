import express from 'express';
import { Request, Response, NextFunction } from 'express';
import router from './routes/cocktailRoutes';
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth'
import { createNewUser, signin } from './controllers/userController'

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.use('/api', protect, router);

app.post('/user', createNewUser)
app.post('/signin', signin)

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err)
  res.json({message: `had an error: ${err.message}`})
})

export default app;