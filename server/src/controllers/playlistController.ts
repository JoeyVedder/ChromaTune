
import { Request, Response } from 'express';
import Mood from '../models/mood.js';
import UserMood from '../models/userMood.js';
import { Op } from 'sequelize';
import { getPlaylistsByMood, getPlaylistDetails as getSpotifyPlaylistDetails } from '../services/spotifyServices.js';
import { getColorForMood } from '../utils/spotifyUtils.js';


interface UserMoodWithMood {
    id: number;
    mood: {
        name: string;
    };
    userId: number;
    moodId: number;
    spotifyPlaylistId: string;
    createdAt: Date;
}

export const getMoodPlaylists = async (req: Request, res: Response) => {
    try {
        const { moodId } = req.params;
        
        if (!moodId) {
            return res.status(400).json({ message: 'Mood ID is required' });
        }

        try {
            const playlists = await getPlaylistsByMood(Mood.name);
            const response = {
                mood: Mood.name,
                color: getColorForMood(Mood.name),
                playlists
            };
            res.json(response);
        } catch (spotifyError) {
            const mockPlaylists = [
                {
                    id: `playlist-${moodId}-1`,
                    name: `${Mood.name} Playlist 1`,
                    description: `Feeling ${Mood.name}? This playlist is perfect for your mood!`,
                    imageUrl: 'https://placeholder.com/300',
                    tracksTotal: 20
                },
                {
                    id: `playlist-${moodId}-2`,
                    name: `${Mood.name} Playlist 2`,
                    description: `Another great playlist for when you're feeling ${Mood.name}!`,
                    imageUrl: 'https://placeholder.com/300',
                    tracksTotal: 15
                }
            ];
            res.json({
                mood: Mood.name,
                color: getColorForMood(Mood.name),
                playlists: mockPlaylists
            });
        }
    } catch (error) {
        console.error('Error in getMoodPlaylists:', error);
        res.status(500).json({ 
            message: 'Error getting playlists',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

export const saveUserPlaylist = async (req: Request, res: Response) => {
    try {
        const { userId, moodId, spotifyPlaylistId } = req.body;
        
        const mood = await Mood.findByPk(moodId);
        if (!mood) {
            return res.status(404).json({ message: 'Mood not found' });
        }

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
            return res.status(404).json({ message: 'No mood found for user' });
        }

        res.json({ message: 'Playlist saved successfully' });
    } catch (error) {
        console.error('Error in saveUserPlaylist:', error);
        res.status(500).json({ 
            message: 'Error saving playlist',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};


export const getPlaylistHistory = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;

        const history = await UserMood.findAll({
            where: { 
                userId,
                spotifyPlaylistId: { 
                    [Op.ne]: null as any
                } 
            },
            include: [{
                model: Mood,
                attributes: ['name']
            }],
            order: [['createdAt', 'DESC']]
        }) as unknown as UserMoodWithMood[];

        const formattedHistory = await Promise.all(history.map(async (entry) => {
            try {
                const playlist = await getSpotifyPlaylistDetails(entry.spotifyPlaylistId);
                return {
                    id: entry.id,
                    mood: entry.mood.name,
                    date: entry.createdAt,
                    playlist
                };
            } catch (error) {
                return {
                    id: entry.id,
                    mood: entry.mood.name,
                    date: entry.createdAt,
                    playlist: { 
                        id: entry.spotifyPlaylistId, 
                        name: 'Playlist unavailable' 
                    }
                };
            }
        }));

        res.json(formattedHistory);
    } catch (error) {
        console.error('Error in getPlaylistHistory:', error);
        res.status(500).json({ 
            message: 'Error fetching playlist history',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
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
                description: 'Playlist details temporarily unavailable',
                imageUrl: 'https://placeholder.com/300',
                tracks: [
                    {
                        id: '1',
                        name: 'Track 1',
                        artist: 'Artist 1',
                        album: 'Album 1',
                        duration: '3:30',
                        previewUrl: null
                    },
                    {
                        id: '2',
                        name: 'Track 2',
                        artist: 'Artist 2',
                        album: 'Album 2',
                        duration: '4:15',
                        previewUrl: null
                    }
                ]
            };
            res.json(mockPlaylistDetails);
        }
    } catch (error) {
        console.error('Error in getPlaylistDetails:', error);
        res.status(500).json({ 
            message: 'Error fetching playlist details',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// endpoint for Spotify connection test
export const testSpotifyConnection = async (_req: Request, res: Response) => {
    try {
        const playlists = await getPlaylistsByMood('Happy');
        res.json({ 
            message: 'Spotify connection successful', 
            sample_playlists: playlists 
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Spotify connection failed',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};