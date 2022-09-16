import express from 'express';
import { htmlSanitizer } from '../middlewares/htmlSanitizer.js';
import { getProduct } from '../controllers/productController.js';
import { sessionVerifier } from '../middlewares/authorizationMiddleware.js';

const router = express.Router();

router.get('/products/:filterProduct', htmlSanitizer, sessionVerifier, getProduct);

export default router;