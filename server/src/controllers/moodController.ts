
import { Request, Response } from 'express';
import Mood from '../models/mood.js';
import UserMood from '../models/userMood.js';
import { getPlaylistsByMood } from '../services/spotifyServices.js';

export const getAllMoods = async (_req: Request, res: Response) => {
    try {
        const moods = await Mood.findAll();
        res.json(moods);
    } catch (error) {
        console.error('Error fetching moods:', error);
        res.status(500).json({ message: 'Error fetching moods' });
    }
};

export const logUserMood = async (req: Request, res: Response) => {
    try {
        const { userId, moodId } = req.body;
        const mood = await Mood.findByPk(moodId);
        if (!mood) {
            return res.status(404).json({ message: 'Mood not found' });
        }


        const userMood = await UserMood.create({
            userId,
            moodId
        });

        res.status(201).json(userMood);
    } catch (error) {
        console.error('Error logging mood:', error);
        res.status(500).json({ message: 'Error logging mood' });
    }
};


getPlaylistsByMood('mood argument');

export const getUserMoodHistory = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;

        const history = await UserMood.findAll({
            where: { userId },
            include: [Mood],
            order: [['createdAt', 'DESC']]
        });

        res.json(history);
    } catch (error) {
        console.error('Error fetching mood history:', error);
        res.status(500).json({ message: 'Error fetching mood history' });
    }
};

