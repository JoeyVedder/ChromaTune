
import { Request, Response } from 'express';
import Mood from '../models/mood.js';
import UserMood from '../models/userMood.js';
import { getPlaylistsByMood } from '../services/spotifyServices.js';

export const getMoodPlaylists = async (req: Request, res: Response) => {
    try {
        const { moodId } = req.params;

        const mood = await Mood.findByPk(moodId);
        if (!mood) {
            return res.status(404).json({ message: 'Mood not found' });
        }
        const playlists = await getPlaylistsByMood(mood.name.toString());
        
        res.json({ 
            mood: mood.name,
            playlists 
        });
    } catch (error) {
        console.error('Error getting playlists:', error);
        res.status(500).json({ message: 'Error getting playlists' });
    }
};

export const saveUserPlaylist = async (req: Request, res: Response) => {
    try {
        const { userId, moodId, spotifyPlaylistId } = req.body;

        const userMood = await UserMood.findOne({
            where: { userId, moodId },
            order: [['createdAt', 'DESC']]
        });

        if (!userMood) {
            return res.status(404).json({ message: 'No mood log found' });
        }

        userMood.spotifyPlaylistId = spotifyPlaylistId;
        await userMood.save();

        res.json({ message: 'Playlist saved successfully' });
    } catch (error) {
        console.error('Error saving playlist:', error);
        res.status(500).json({ message: 'Error saving playlist' });
    }
};

export const getPlaylistDetails = async (req: Request, res: Response) => {
    try {
        const playlist = await getPlaylistDetails(req, res);
        res.json(playlist);
    } catch (error) {
        console.error('Error getting playlist details:', error);
        res.status(500).json({ message: 'Error getting playlist details' });
    }
};

export const testSpotifyConnection = async (_req: Request, res: Response) => {
    try {
        const playlists = await getPlaylistsByMood('Happy');
        res.json({ 
            message: 'Spotify connection successful',
            sample_playlists: playlists 
        });
    } catch (error) {
        console.error('Error testing Spotify:', error);
        res.status(500).json({ message: 'Spotify connection failed' });
    }
};

