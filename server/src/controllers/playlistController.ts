
import { Request, Response } from 'express';
import { Mood } from '../models/index.js';
import userMood from "../models/userMood.js";

export const moodController = { 
    async (req: Request, res: Response) => {
        try {
            const moods = await Mood.findAll();
            res.json(moods);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },