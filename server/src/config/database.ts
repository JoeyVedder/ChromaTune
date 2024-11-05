import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5433'),
    dialect: 'postgres',
    logging: false
});

export const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connection established.');
    } catch (error) {
        console.error('❌ Unable to connect to database:', error);
    }
};