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

app.get('/api/whoami', (_req, res) => {
    res.json({ipaddress: _req.ip, language: _req.headers['accept-language'], software: _req.headers['user-agent']});
});
