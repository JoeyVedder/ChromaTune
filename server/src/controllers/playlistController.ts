
import { Request, Response } from 'express';
import { Mood } from '../models/index.js';
import userMood from "../models/userMood.js";
import { mock } from 'node:test';

export const moodController = { 
    async (req: Request, res: Response) => {
        try {
            const { moodId } = req.params;

            const mood = await Mood.findByPk(moodId);
            if (!mood) {
                return res.status.json({ message: 'Mood not found' });
            }

            //temporarily mock playlist data spotify api is integrated
            const mockPlaylist = [
                {
                    id: `playlist-${moodId}-1`,
                    name: `${moodId} Playlist`,
                    description: `Feeling ${mood.name}? This playlist is made just for you to fit your vibe. Press play and let the music take you away!`,
                }
                {
                    id: `playlist-${moodId}-2`,
                    name: `${moodId} Playlist`,
                    description: `Feeling ${mood.name}? This playlist is made just for you to fit your vibe. Press play and let the music take you away!`,
                }
            ];

            res.json({mockPlaylist});
        } catch (error) {
            console.error(error);
            res.status.json({ message: 'Error getting mood playlist' });
        }
    };

    export const saveUserPlaylist = async (req: Request, res: Response) => {
        try {
            const { userId, moodId, playlistId } = req.body;
    
            // Verify mood exists
            const mood = await Mood.findByPk(moodId);
            if (!mood) {
                return res.status(404).json({ message: 'Mood not found' });
            }
    
            // Save the user's mood and playlist selection
            const userMood = await UserMood.create({
                userId,
                moodId,
                spotifyPlaylistId: playlistId
            });

            res.json({ message: 'Playlist saved successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error saving playlist' });
        }

        export const getPlaylistHistory = async (req: Request, res: Response) => {
            try {
                const { userId } = req.params;
        
                const history = await UserMood.findAll({
                    where: { 
                        userId,
                        spotifyPlaylistId: { 
                            [Op.ne]: null
                        } 
                    },
                    include: [Mood],
                    order: [['createdAt', 'DESC']]
                });
        
                res.json(history);
            } catch (error) {
                res.status(500).json({ message: 'Error fetching playlist history', error });
            }
        };