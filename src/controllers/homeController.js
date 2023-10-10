import  express  from "express";
import db from "../models/index";
const getHomePage = async(req,res)=> {
    try{
         let data = await db.List_users.findAll(); 
         return res.render("home",
         {
            data: JSON.stringify(data)
         });
    }catch(e) {
        console.log(e)
    }
}
module.exports = {
    getHomePage:getHomePage,
} 
