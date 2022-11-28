import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { moviesRouter } from './services/MovieService/movie.route';

// Load .env file data
dotenv.config();

const port = process.env.PORT || 4000;
const app = express();

// Configuration
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api/movie', moviesRouter);

// TODO: Add request logger

// Start
app.listen(port, () => {
  console.log(`Service is up and running on port ${port}`);
});
