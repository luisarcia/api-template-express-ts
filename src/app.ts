import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';

const app: Application = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

// Rutas
app.use('/', routes);

export default app;