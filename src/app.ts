// src/app.ts

import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes';

// Crear instancia de la aplicación
const app = express();

// Configuración de Middlewares
app.use(express.json()); // Parsear JSON en las solicitudes
app.use(cookieParser()); // Parsear cookies
app.use(cors({
  origin: process.env.CLIENT_URL, // Reemplaza con el URL de tu cliente
  credentials: true, // Permitir cookies a través de CORS
}));


// Registrar Rutas
app.use('/api/auth', authRoutes);

export default app;
