
import express from 'express';
import {
    getAllMoods,
    logUserMood,
    getUserMoodsHistory,
    getMoodById
} from '../controllers/moodController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/moods', getAllMoods);
router.get('/moods/:id', getMoodById);
router.use(authenticateToken);
router.post(`/log`, logUserMood);
router.get(`/history/:userId`, getUserMoodsHistory);

export default router;