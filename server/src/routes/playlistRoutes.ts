import express from 'express';
import { 
    getMoodPlaylists, 
    saveUserPlaylist, 
    getPlaylistHistory, 
    getPlaylistDetails,
    testSpotifyConnection  
} from '../controllers/playlistController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/mood/:moodId', getMoodPlaylists);
router.get('/details/:playlistId', getPlaylistDetails);

// Test route for Spotify
router.get('/test-spotify', testSpotifyConnection); 

// Protected routes
router.use(authenticateToken);
router.post('/save', saveUserPlaylist);
router.get('/history/:userId', getPlaylistHistory);

export default router;