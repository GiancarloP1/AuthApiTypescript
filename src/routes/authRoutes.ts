// src/routes/authRoutes.ts

import { Router } from 'express';

const router = Router();

// Ruta de ejemplo para probar
router.get('/ping/', (req, res) => {
  res.json({ message: 'Pong!' });
});

export default router;
