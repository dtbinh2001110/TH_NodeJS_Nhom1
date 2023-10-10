import express from "express"
const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('testnodejs','root',null,{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("kết nối cơ sở dữ liệu thành công");
    } catch ( error ){
        console.error("kêt nối cơ sở dữ liệu không thành công:",error)
    }
}
export default connectDB
