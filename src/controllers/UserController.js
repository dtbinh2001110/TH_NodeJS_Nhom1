import express from"express"
import userModel from "../services/userModel"
const getAllUser = async (req,res) => {
    let userlist = await userModel.getAllUser()
    res.render('listUser',
    { data:
        {title:'list User', 
        page:'listUser',
        rows: userlist}
    })
}

// const createUser = (rew,res) => {
//     res.render('list',
//      { data:{
//         title:'Create New User', 
//         page:'createNewUser'}
//     })
// }

// const detailUser = async (req,res) => {
//     if (isAuthentication(req,res)==true) {
//         let user = req.params.username
//         let dataUser = await userModel.detailUser(user)
//         res.render('dataiUser',
//         { data:{
//             title:'Detail User',
//             page:'detailUser', 
//             rows: dataUser}
//         })
//     }
// }

// const updateUser= async (req,res) => {
//     console.log(req.body)
//     let role = 0
//     let { user,pass,fullname,address} = req.body
//     if ('role' in req.body)
//         role = 1
//     await userModel.updateUser(fullname,pass,address,role,user)
//     res.redirect("/list-user")
// }

module.exports = {
    getAllUser:getAllUser,
    // createUser:createUser,
    // detailUser:detailUser,
    // updateUser:updateUser
}


 
 
 