import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import testRouter from './routes/test.routes';

const app: Application = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/v1/test', testRouter);

// Middleware de errores
//app.use(errorMiddleware);

export default app;
