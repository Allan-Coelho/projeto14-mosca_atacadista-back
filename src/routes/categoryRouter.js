import express from 'express';
import { htmlSanitizer } from '../middlewares/htmlSanitizer.js';
import { getProductByCategory } from '../controllers/categoryController.js';

const router = express.Router();

router.get('/products/category/:category', htmlSanitizer, getProductByCategory);

export default router;