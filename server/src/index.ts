import express from 'express';// Importing express
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './config/database.js';
// Remove the User import since we're not using it directly here
import testRoutes from './routes/testRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Use the test routes
app.use('/api/test', testRoutes);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connection established.');

        await sequelize.sync({ alter: true });
        console.log('✅ Database synchronized.');

        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('❌ Error starting server:', error);
    }
};

startServer();