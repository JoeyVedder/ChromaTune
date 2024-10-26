
import { Request, Response } from 'express';
import Mood from '../models/mood.js';
import UserMood from '../models/userMood.js';
import { Op } from 'sequelize';
import { getPlaylistsByMood, getPlaylistDetails as getSpotifyPlaylistDetails } from '../services/spotifyServices.js';

export const getMoodPlaylists = async (req: Request, res: Response) => {
    try {
        const { moodId } = req.params;

        const mood = await Mood.findByPk(moodId);
        if (!mood) {
            return res.status(404).json({ message: 'Mood not found' });
        }

        try {
            const playlists = await getPlaylistsByMood(mood.name);
            res.json(playlists);
        } catch (spotifyError) {
            const mockPlaylists = [
                {
                    id: `playlist-${moodId}-1`,
                    name: `${mood.name} Playlist 1`,
                    description: `Feeling ${mood.name}? This playlist is perfect for your mood!`,
                },
                {
                    id: `playlist-${moodId}-2`,
                    name: `${mood.name} Playlist 2`,
                    description: `Another great playlist for when you're feeling ${mood.name}!`,
                }
            ];
            res.json(mockPlaylists);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error getting mood playlist' });
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
        
                const history = await UserMood.findAll({
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
        
                try {
                    const playlist = await getSpotifyPlaylistDetails(playlistId);
                    res.json(playlist);
                } catch (spotifyError) {
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
                }
            } catch (error) {
                res.status(500).json({ message: 'Error fetching playlist details', error });
            }
        };