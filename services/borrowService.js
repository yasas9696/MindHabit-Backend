const BorrowBook = require("../models/borrowModel");
const user = require("../models/userModel");
const book = require("../models/bookModel");
module.exports.addBorrowBook = function(newBorrowBook){
    console.log(newBorrowBook)
    let{
       bID,
       uID,
       borrowed_date,
       return_date,
       fines
        
    } = newBorrowBook;
    return BorrowBook.create({bID,
        uID,
        borrowed_date,
        return_date,fines})
        .then(res=>{Response={
            code:0,
            message:'',
            result:res

        }
        return Response;})

        .catch(err =>{Response={
            code:1,
            message:err.original.sqlMessage,
            result:null}
        return Response     
        })

}


module.exports.getAllBorrowBooks = function(){
    return BorrowBook.findAll({include:[{model:user,as:"User"},{model:book,as :"Book"}]}).then(res=>{Response={
        code:0,
        message:'',
        result:res

    }
    return Response;})

        .catch(err =>{Response={
            code:1,
            message:err,
            result:null
    
        }
        return Response;})
}

module.exports.deleteBook = function(id){
    return BorrowBook.destroy({
        where:{id:id},
    }).then(res=>{
        Response={
            code:0,
            message:'',
            result:res

        }
        return Response;
    })
    .catch(err =>{Response={
        code:1,
        message:err,
        result:null

    }
    return Response;})
}


module.exports.getBorrowBooksByUserId =  function(id){
    return BorrowBook.findOne({include:[{model:user,as:"User"},{model:book,as :"Book"}],
        where:{uID:id},
        raw:true
    }).then(res=>{
        Response={
            code:0,
            message:'',
            result:res

        }
        return Response;
    })
    .catch(err =>{Response={
        code:1,
        message:err,
        result:null

    }
    return Response;})
}