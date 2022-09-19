import express from "express";
import { htmlSanitizer } from "../middlewares/htmlSanitizer.js";
import {
  getProduct,
  getProductById,
  postProduct,
} from "../controllers/productController.js";
import { sessionVerifier } from "../middlewares/authorizationMiddleware.js";

const router = express.Router();

router.get("/products", htmlSanitizer, sessionVerifier, getProduct);
router.get("/product", htmlSanitizer, sessionVerifier, getProductById);
router.post("/product", htmlSanitizer, sessionVerifier, postProduct);

export default router;
