import express from 'express';
import router from './routes/cocktailRoutes';
import morgan from 'morgan';



const app = express();

app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.use('/api', router);

export default app;