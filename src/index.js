import dotenv from "dotenv"
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./route/webRoute";
import path from 'path'
const app = express()
dotenv.config()
const port = process.env.PORT

app.use(express.static(path.join(__dirname,"public")))
configViewEngine(app)
initWebRoutes(app)

app.listen(port, () => {
    console.log("Example app listening on port ${port}")
})
