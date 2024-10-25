import express, { Request, Response } from 'express';
import { User } from '../models/index.js';

const router = express.Router();

// Test route to create a user
router.post('/user', async (_req: Request, res: Response) => {
    try {
        const user = await User.create({
            username: 'testuser',
            email: 'test@test.com',
            password: 'password123'
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
});

// Test route to get all users
router.get('/users', async (_req: Request, res: Response) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error getting users' });
    }
});

export default router;