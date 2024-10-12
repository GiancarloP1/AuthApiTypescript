// src/index.ts

import app from './app';
import dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();

const PORT = process.env.PORT || 5000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});