import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./route/webRoute";
import connectDB from "./config/connectDB";
import path from 'path';
// import connection from "./config/connectDB";
// import { Pool } from "mysql2/typings/mysql/lib/Pool";
const app = express();
dotenv.config();

app.use(express.static(path.join(__dirname,'public')));
configViewEngine(app);
initWebRoutes(app);
connectDB();

const port = process.env.PORT || 4444;

app.listen(port, () => {
    console.log("Example app listening on port http://localhost:${port}")
})