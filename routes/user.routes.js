import express from 'express';
const router = express.Router();

import { getUserInfo } from '../controllers/user/user.controller.js';

router.get('/', getUserInfo);

export default router;