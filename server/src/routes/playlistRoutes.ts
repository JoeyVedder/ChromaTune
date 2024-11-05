import express from 'express';
import { 
    getMoodPlaylists,
    saveUserPlaylist,
    getPlaylistDetails,
    testSpotifyConnection 
} from '../controllers/playlistController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/test-spotify', testSpotifyConnection);
router.get('/mood/:moodId', getMoodPlaylists);
router.get('/details/:playlistId', getPlaylistDetails);

// Protected routes
router.use(authenticateToken);
router.post('/save', saveUserPlaylist);

export default router;