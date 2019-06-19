const Book = require("../models/bookModel");

module.exports.addBook = function(newBook){
    console.log(newBook)
    let{
        bname,
        author,
        noOfBooks,
        category,
        bookcode,
        price
    } = newBook;
    return Book.create({bname,
        author,
        category,
        bookcode,
        noOfBooks,
        price})
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

module.exports.updateBook = function(book,id){
    let{
        bname,
        author,
        noOfBooks,
        price
    } = book;
    return Book.update({bname,
        author,
        noOfBooks,
        price},{where:{id:id}})
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
module.exports.getAllBooks = function(){
    return Book.findAll().then(res=>{Response={
        code:0,
        message:'',
        result:res

    }
    return Response;})

        .catch(err =>{Response={
            code:1,
            message:err.original.sqlMessage,
            result:null
    
        }
        return Response;})
}

module.exports.deleteBook = function(id){
    return Book.destroy({
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

module.exports.getBookbyId = function(id){
    return Book.findOne({
        where:{id:id},
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