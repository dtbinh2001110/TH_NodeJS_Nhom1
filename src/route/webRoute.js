import express from "express";
import getHomePage from "../controllers/homeController";
import AboutPage from "../controllers/AboutController";
const router = express.Router();
const initWebRoutes = (app) => {

    // router.get('/about', (req, res) => {
    //     return res.send('about.js')
    // });
    router.get('/',getHomePage);
    router.get('/about',AboutPage);
    // router.get('/about', (req, res) => {
    //     return res.send('about.js')
    // });
    return app.use("/",router);
}
export default initWebRoutes;