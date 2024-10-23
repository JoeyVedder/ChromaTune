
import { Request, Response } from 'express';
import Mood from '../models/mood.js';
import userMood from '../models/userMood.js';

export const getMoods = async (req: Request, res: Response) => {
    try {
        const moods = await Mood.findAll();
        res.json(moods);
    } catch (error) {
        res.json({ message: `Error getting moods: ${error}` });
    }
};

export const loguserMood = async (req: Request, res: Response) => {
    try {
        const { userId =, moodId = } = req.body;
        const mood = await Mood.findByPk(moodId);
        if (!mood) {
            return res.json({ message: `Mood with id ${moodId} not found` });
        }
    }