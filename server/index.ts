import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

import cors from 'cors';
app.use(cors({optionsSuccessStatus: 200})); //legacy browser support

const port: number = parseInt(process.env.EXPRESS_PORT || "6969");

app.listen( port, () => {
    console.log(`express is listening at http://localhost:${port}`);
});

app.get('/', (_req, res) => {
    const myDate = Date.now();
    res.json({date: myDate});
});
