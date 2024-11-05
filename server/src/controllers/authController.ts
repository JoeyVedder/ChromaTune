import { Request, Response } from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../middleware/auth.js';


export const getProfile = (req: Request, res: Response) => {
    res.json(req.user);
};

export const register = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        const token = generateToken(user.id);

        res.status(201).json({ token, message: 'User created successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Error registering user' });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const validPassword = bcrypt.compare(password, String(user.password));
        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        const token = generateToken(user.id);

        res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Error logging in' });
    }
};