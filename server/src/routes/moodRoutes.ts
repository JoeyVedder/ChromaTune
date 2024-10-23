
import express from 'express';
import {
    getMoods,
    loguserMood,
    getUserMoodsHistory,
    getMoodById
} from '../controllers/moodController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/moods', getMoods);
router.get('/moods/:id', getMoodById);
