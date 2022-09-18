import express from 'express';
import { htmlSanitizer } from '../middlewares/htmlSanitizer.js';
import { sessionVerifier } from '../middlewares/authorizationMiddleware.js';
import { getCartProduct, postCartProduct } from './cartController.js';

const router = express.Router();

router.get('/cart', htmlSanitizer, sessionVerifier, getCartProduct);
router.post('/cart', htmlSanitizer, sessionVerifier, postCartProduct);

export default router;