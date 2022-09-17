import express from 'express';
import { htmlSanitizer } from '../middlewares/htmlSanitizer.js';
import { getProductByCategory } from '../controllers/categoryController.js';
import { sessionVerifier } from '../middlewares/authorizationMiddleware.js';

const router = express.Router();

router.get('/products/category/:category', htmlSanitizer, sessionVerifier, getProductByCategory);

export default router;