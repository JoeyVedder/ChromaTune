
import express from 'express';
import {
    getMoods,
    loguserMood,
    getUserMoodsHistory,
    getMoodById
} from '../controllers/moodController.js';
import { authenticateToken } from '../middleware/auth.js';