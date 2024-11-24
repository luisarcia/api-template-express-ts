import app from './app';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

// Validar que las variables de entorno críticas estén definidas
const PORT = process.env.PORT || 3000;
if (!process.env.PORT) {
  console.warn('PORT no está definido en el archivo .env. Usando el valor por defecto: 3000');
}

// Iniciar el servidor y manejar errores
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}).on('error', (err: NodeJS.ErrnoException) => {
  console.error(`Error starting server: ${err.message}`);
  process.exit(1); // Salir con código de error
});
