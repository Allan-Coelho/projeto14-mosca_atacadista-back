import express from 'express';
import dotenv from "dotenv";
import userRouter from './src/routes/userRouter.js';
import signInRouter from './src/routes/signInRouter.js';
import productRouter from './src/routes/productRouter.js';
import cors from 'cors';

const server = express();

dotenv.config();

server
    .use(cors())
    .use(express.json())
    .use(userRouter)
    .use(signInRouter)
    .use(productRouter)
    .listen(process.env.PORT);