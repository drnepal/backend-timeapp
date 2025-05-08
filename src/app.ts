// src/app.ts

import morgan from 'morgan';
import cors from 'cors';
import express from 'express';
import onboardingRoutes from './routes/onboarding';

const app = express();

app.use(cors({
  origin: '*', // or put exact IP here like 'http://172.20.20.20:19006' only if needed
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.use('/api/onboarding', onboardingRoutes);

app.get('/api', (req, res) => {
  res.send('✅ API is reachable');
});

export default app;
