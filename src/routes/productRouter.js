import express from 'express';
import { htmlSanitizer } from '../middlewares/htmlSanitizer.js';
import { getProduct, getProductFilter } from '../controllers/productController.js';
import { sessionVerifier } from '../middlewares/authorizationMiddleware.js';

const router = express.Router();

router.get('/products', htmlSanitizer, sessionVerifier, getProduct);
router.get('/products/:filterProduct', htmlSanitizer, sessionVerifier, getProductFilter);

export default router;