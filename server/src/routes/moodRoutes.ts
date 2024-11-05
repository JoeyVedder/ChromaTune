
import express from 'express';
import { 
    getAllMoods, 
    logUserMood, 
    getUserMoodHistory 
} from '../controllers/moodController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/moods', getAllMoods);

// Protected routes
router.use(authenticateToken);
router.post('/log', logUserMood);
router.get('/history/:userId', getUserMoodHistory);

export default router;
