
import { Request, Response } from 'express';
import Mood from '../models/mood.js';
import UserMood from "../models/userMood.js";
import { mock } from 'node:test';
import { Op } from 'sequelize';

        export const moodController = { 
            async function (req: Request, res: Response) {
                try {
                    const { moodId } = req.params;

                    const mood = await Mood.findByPk(moodId);
                    if (!mood) {
                        return res.json({ message: 'Mood not found' });
                    }

                    //temporarily mock playlist data spotify api is integrated
                    const mockPlaylist = [
                        {
                            id: `playlist-${moodId}-1`,
                            name: `${moodId} Playlist`,
                            description: `Feeling ${mood.name}? This playlist is made just for you to fit your vibe. Press play and let the music take you away!`,
                        },
                        {
                            id: `playlist-${moodId}-2`,
                            name: `${moodId} Playlist`,
                            description: `Feeling ${mood.name}? This playlist is made just for you to fit your vibe. Press play and let the music take you away!`,
                        }
                    ]

                    res.json({mockPlaylist});
                } catch (error) {
                    console.error(error);
                    res.json({ message: 'Error getting mood playlist' });
                }
            }
        };

        export const saveUserPlaylist = async (req: Request, res: Response) => {
            try {
                const { userId, moodId, spotifyPlaylistId } = req.body;
                
                const [updatedRows] = await UserMood.update(
                    { spotifyPlaylistId },
                    { 
                        where: { 
                            userId,
                            moodId 
                        },
                        limit: 1
                    }
                );

                if (updatedRows === 0) {
                    return res.json({ message: 'No mood found for user' });
                }

            res.json({ message: 'Playlist saved successfully' });
        } catch (error) {
            console.error(error);
            res.json({ message: 'Error saving playlist' });
        }
    };

        export const getPlaylistHistory = async (req: Request, res: Response) => {
            try {
                const { userId } = req.params;
        
                const history: UserMood[] = await UserMood.findAll({
                    where: { 
                        userId,
                        spotifyPlaylistId: { 
                            [Op.ne]: null as unknown as string
                        } 
                    },
                    include: [Mood],
                    order: [['createdAt', 'DESC']]
                });
        
                res.json(history);
            } catch (error) {
                res.json({ message: 'Error fetching playlist history', error });
            }
        };

        export const getPlaylistDetails = async (req: Request, res: Response) => {
            try {
                const { playlistId } = req.params;
        
                // TODO: Once we set up Spotify service, we'll get real playlist details
                // const playlistDetails = await getPlaylistDetails(playlistId);
        
                // Temporary response
                const mockPlaylistDetails = {
                    id: playlistId,
                    name: 'Sample Playlist',
                    description: 'Coming soon...',
                    tracks: [
                        { name: 'Track 1', artist: 'Artist 1' },
                        { name: 'Track 2', artist: 'Artist 2' }
                    ]
                };
        
                res.json(mockPlaylistDetails);
            } catch (error) {
                res.json({ message: 'Error fetching playlist details', error });
            }
        };