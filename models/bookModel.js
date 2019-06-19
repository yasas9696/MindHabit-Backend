const Sequelize = require("sequelize");
const db = require("../DBConnection/connection");
const borrow = require("../models/borrowModel");
const request =require("../models/requestModel");
const  books = db.seq.define(
    "books",
    {
        bname:{
            type:Sequelize.STRING
        },
        author:{
            type:Sequelize.STRING
        },
        noOfBooks:{
            type:Sequelize.INTEGER
        },
        price:{
            type:Sequelize.FLOAT
        },
        category:{
            type:Sequelize.STRING

        },
        bookcode:{
            type:Sequelize.STRING

        },

    },
   { timestamps:false}
    
)
borrow.belongsTo(books,{as:'Book',foreignKey:'bID'})
request.belongsTo(books,{as:'Book',foreignKey:'bID'})
module.exports = books;