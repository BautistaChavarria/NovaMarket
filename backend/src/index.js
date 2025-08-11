import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { pool } from './config/db.js';
import healthRouter from './routes/health.js';

dotenv.config();

const app = express();

// Lista de orígenes permitidos
const allowedOrigins = [
  'http://localhost:5173',      // Desarrollo local con Vite
  'https://tudominiofinal.com'  // Producción (cambiá por tu dominio real)
];

// Configuración de CORS
app.use(cors({
  origin: (origin, callback) => {
    // Permitir si no hay origin (ej. Postman) o si está en la lista
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Rutas
app.use('/api/health', healthRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
