import app from './app';
import dotenv from 'dotenv';

// load environment variables
dotenv.config();

const PORT = process.env.PORT ?? 3000;

if (!process.env.PORT) {
  console.warn('PORT is not defined in the .env file. Using default value: 3000');
}

// Start the server and handle errors
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}).on('error', (err: NodeJS.ErrnoException) => {
  console.error(`Error starting server: ${err.message}`);
  process.exit(1); // Salir con código de error
});
