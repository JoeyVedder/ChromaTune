import express from 'express';
import { 
    getMoodPlaylists, 
    saveUserPlaylist, 
    getPlaylistHistory, 
    getPlaylistDetails 
} from '../controllers/playlistController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/mood/:moodId', getMoodPlaylists);
router.get('/details/:playlistId', getPlaylistDetails);
router.use(authenticateToken);
router.post('/save', saveUserPlaylist);
router.get('/history/:userId', getPlaylistHistory);

router.get('/test', (req, res) => {
    res.json({ message: 'Playlist routes are working!' });
});

export default router;