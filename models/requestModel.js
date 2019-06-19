const Sequelize = require("sequelize");
const db = require("../DBConnection/connection");

const  requests = db.seq.define(
    "requests",
    {
       
        uID:{
            type:Sequelize.INTEGER
        },
        bID:{
            type:Sequelize.INTEGER
        },
       

    },
    { timestamps:false}
   
)
module.exports = requests;