import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './config/database.js';
import authRoutes from './routes/authRoutes.js';
import moodRoutes from './routes/moodRoutes.js';
import playlistRoutes from './routes/playlistRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Base test route
app.get('/test', (_req, res) => {
    res.json({ message: 'Server is running!' });
});

app.use('/api/auth', authRoutes);  
app.use('/api/mood', moodRoutes);   
app.use('/api/playlist', playlistRoutes); 

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connected');
        
        await sequelize.sync({ alter: true });
        console.log('✅ Models synchronized');

        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('❌ Server startup error:', error);
        process.exit(1);
    }
};

startServer();

