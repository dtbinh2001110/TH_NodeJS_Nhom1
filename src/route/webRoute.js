import express from "express";
import HomePage from "../controllers/homeController";
import AboutPage from "../controllers/AboutController";
import userController from "../controllers/UserController";
const router = express.Router();
const initWebRoutes = (app) => {

    // router.get('/about', (req, res) => {
    //     return res.send('about.js')
    // });

    // router.get('/list-user', userController.getAllUser)
    // router.get('/list-user/:username', userController.detailUser)
    // router.get('/edit-user/username', userController.editUser)
    // router.post('/update-user', userController.updateUser)
    // router.post('/delete-user', userController.deleteUser)
    // router.get('/login', userController.fromLoginUser)
    // router.get('/logout', userController.logOut)

    // router.post('/verify-login', userController.loginUser)
    // router.get('/create-new-user', userController.createUser)
    // router.post('/insert-new-uer', userController.insertUser)
    // router.get('/upload-file', userController.uploadFile)
    // router.post('/save-file', userController.saveFileUpload)

    router.get('/',HomePage.getHomePage);
    router.get('/about',AboutPage.getAboutPage);
    // router.get('/list',userController.getAllUser);
    // router.get('/list-user', userController.detailUser);
    // router.post('/update-user', userController.updateUser);

    router.get("*", (req, res) => {
        return res.send("404 not found")
    })
    return app.use("/",router);
}
export default initWebRoutes;


// router.get('/',HomePage.getHomePage);
// router.get('/list-user',userController.getAllUser);
// router.get('/about',AboutPage.getAboutPage);
// router.get('/list-user/:username', userController.detailUser);
// router.post('/update-user', userController.updateUser);