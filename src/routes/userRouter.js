
import express from 'express';
import { htmlSanitizer } from '../middlewares/htmlSanitizer.js';
import { signup, getUser } from '../controllers/userController.js';
import { sessionVerifier } from '../middlewares/authorizationMiddleware.js';

const router = express.Router();

router.post('/user', htmlSanitizer, signup);
router.get('/user', htmlSanitizer, sessionVerifier, getUser);

export default router;