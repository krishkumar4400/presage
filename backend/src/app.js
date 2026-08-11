import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());


export default app;
