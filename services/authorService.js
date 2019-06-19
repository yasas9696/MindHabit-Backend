const Author = require("../models/authorModel");

module.exports.addAuthor = function(newAuthor){
    console.log(newAuthor)
    let{
        fname,
        lname,
        authorCode
    } = newAuthor;
    return Author.create({fname,
        lname,
        authorCode})
        .then(res=>{Response={
            code:0,
            message:'',
            result:res

        }
        return Response;})

        .catch(err =>{Response={
            code:1,
            message:err,
            result:null}
        return Response    
        })

}

module.exports.updateAuthor = function(author,id){
    let{
        fname,
        lname,
        authorCode
    } = author;
    return Author.update({fname,
        lname,
        authorCode},{where:{id:id}})
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
module.exports.getAllAuthors = function(){
    return Author.findAll().then(res=>{Response={
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


module.exports.deleteAuthor = function(id){
    
    return Author.destroy({
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