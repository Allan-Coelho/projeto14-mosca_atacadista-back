import express from 'express';
import dotenv from "dotenv";
import userRouter from './src/routes/userRouter.js';

const server = express();

dotenv.config();

server
    .use(express.json())
    .use(userRouter)
    .listen(process.env.PORT);