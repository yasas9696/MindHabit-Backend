const Sequelize = require("sequelize");
const db = require("../DBConnection/connection");

const  author = db.seq.define(
    "author",
    {
        fname:{
            type:Sequelize.STRING
        },
        lname:{
            type:Sequelize.STRING
        },
        authorCode:{
            type:Sequelize.INTEGER
        }

    },
   { timestamps:false}
    
)
module.exports = author;