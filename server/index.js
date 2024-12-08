import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { securityMiddleware } from './middleware/security.js';
import authRoutes from './routes/auth.js';
import schoolRoutes from './routes/school.js';
import userRoutes from './routes/users.js';
import dataRoutes from './routes/data.js';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// Security middleware
app.use(securityMiddleware);

// Basic middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use('/uploads', express.static(join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/school', schoolRoutes);
app.use('/api/users', userRoutes);
app.use('/api/data', dataRoutes);

// Database connection with retry logic
const connectDB = async (retries = 5) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/aptsmart');
    console.log('Connected to MongoDB');
  } catch (err) {
    if (retries === 0) {
      console.error('MongoDB connection failed:', err);
      process.exit(1);
    }
    console.log(`Retrying connection... (${retries} attempts remaining)`);
    setTimeout(() => connectDB(retries - 1), 5000);
  }
};

connectDB();

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});