import express from 'express';
import { htmlSanitizer } from '../middlewares/htmlSanitizer.js';
import { getProduct, getProductById } from '../controllers/productController.js';
import { sessionVerifier } from '../middlewares/authorizationMiddleware.js';

const router = express.Router();

router.get('/products', htmlSanitizer, sessionVerifier, getProduct);
router.get('/product', htmlSanitizer, sessionVerifier, getProductById);

export default router;