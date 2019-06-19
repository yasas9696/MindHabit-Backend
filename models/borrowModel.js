const Sequelize = require("sequelize");
const db = require("../DBConnection/connection");

const  borrow_books = db.seq.define(
    "borrows",
    {
        uID:{
            type:Sequelize.INTEGER
        },
        bID:{
            type:Sequelize.INTEGER
        },
        borrowed_date:{
            type:Sequelize.DATE
        },
        return_date:{
            type:Sequelize.DATE
        },
        fines:{
            type:Sequelize.DOUBLE

        },
       

    },
   { timestamps:false}
    
)
module.exports = borrow_books;