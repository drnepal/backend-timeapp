import dotenv from 'dotenv';

dotenv.config(); // Load from .env

export const config = {
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI || '',
  jwtSecret: process.env.JWT_SECRET || 'fallback-secret',
  env: process.env.NODE_ENV || 'development',
};
