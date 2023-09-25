import  express  from "express"
const AboutPage = (req,res)=> {
    return res.render("about", { data: { title: "About page",page: "about"}})
}
export default AboutPage