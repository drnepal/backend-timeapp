import express from 'express';
import { submitAwareness } from '../controllers/onboardingController';
import asyncHandler from '../utils/asyncHandler';

const router = express.Router();

// No auth required — public route
router.post('/heard', asyncHandler(submitAwareness));

export default router;
