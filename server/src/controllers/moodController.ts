
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
        const { userId , moodId } = req.body;
        const mood = await Mood.findByPk(moodId);
        if (!mood) {
            return res.json({ message: `Mood with id ${moodId} not found` });
        }
        const newUserMood = await userMood.create({ 
            userId, 
            moodId 
        });
        res.json(newUserMood);
    } catch (error) {
        res.json({ message: `Error logging user mood: ${error}` });
    }
};

export const getUserMoodsHistory = async (req: Request, res: Response) => {
    try {
        const {userId} = req.params;
        const moodHistory = await userMood.findAll({
            where: {userId },
            include: [Mood],
            order: [['createdAt', 'DESCRIPTION']]
        });
        res.json(moodHistory);
    } catch (error) {
        res.json({ message: `Error getting user mood history: ${error}` });
    }
};

export const getMoodById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const mood = await Mood.findByPk(id);
        if (!mood) {
            return res.json({ message: `Mood with id ${id} not found` });
        }
        res.json(mood);
    } catch (error) {
        res.json({ message: `Error getting mood by id: ${error}` });
    }
};