
import express from 'express';
import { htmlSanitizer } from '../middlewares/htmlSanitizer.js';
import { getCategory } from '../controllers/productController.js';
import { sessionVerifier } from '../middlewares/authorizationMiddleware.js';

const router = express.Router();


router.get('/products/:category', htmlSanitizer, sessionVerifier, getCategory);

export default router;