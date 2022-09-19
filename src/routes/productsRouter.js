import express from 'express';
import { htmlSanitizer } from '../middlewares/htmlSanitizer.js';
import { getProduct, getProductById } from '../controllers/productController.js';

const router = express.Router();

router.get('/products', htmlSanitizer, getProduct);
router.get('/product', htmlSanitizer, getProductById);

export default router;