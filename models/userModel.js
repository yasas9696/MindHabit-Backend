const Sequelize = require("sequelize");
const db = require("../DBConnection/connection");
const borrow = require("../models/borrowModel");
const request =require("../models/requestModel");
const  User = db.seq.define(
    "users",
    {
        type:{
            type:Sequelize.STRING

        },
        fname:{
            type:Sequelize.STRING
        },
        lname:{
            type:Sequelize.STRING
        },
        username:{
            type:Sequelize.STRING
        },
        password:{
            type:Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING

        },
        address:{
            type:Sequelize.STRING
        },
        phone:{
            type:Sequelize.STRING
        },
        regdate:{
            type:Sequelize.DATE

        },
        nic:{
            type:Sequelize.STRING
        }





    },
   { timestamps:false}
    
)

borrow.belongsTo(User,{as:'User',foreignKey:'uID'})
request.belongsTo(User,{as:'User',foreignKey:'uID'})

module.exports = User;


