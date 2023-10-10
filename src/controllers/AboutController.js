import  express  from "express"
const getAboutPage = (req,res)=> {
    return res.render("about", { data: { title: "About page",page: "about"}})
}
module.exports ={
    getAboutPage:getAboutPage
} 