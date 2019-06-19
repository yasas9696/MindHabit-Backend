const Request = require("../models/requestModel");
const User = require("../models/userModel");
const Book = require("../models/bookModel");

module.exports.addRequest = function(newRequest){
    console.log(newRequest)
    let{
        
       uID,
        bID,
        
    } = newRequest;
    return Request.create({ 
        uID,
         bID})
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

module.exports.getRequestbyBookId = function(id){
    return Request.findAll({




        where:{bID:id},
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




module.exports.deleteRequest = function(id){
    return Request.destroy({
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
