
import express from 'express';
import {
    getMoods,
    loguserMood,
    getUserMoodsHistory,
    getMoodById
} from '../controllers/moodController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/moods', getAllMoods);
// router.get('/moods/:id', getMoodById); might need to add back later

router.use(authenticateToken);
router.post(`/log`, loguserMood);
router.get(`/history/:userId`, getUserMoodsHistory);

export default router;