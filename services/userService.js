const User = require("../models/userModel");

module.exports.createUser = function(newUser){
    let{
        type,
        fname,
        lname,
        username,
        password,
        email,
        address,
        phone,
        regdate,
        nic
    } = newUser;
    return User.create({type,fname,
        lname,
        username,
        password,
        email,
        address,
        phone,
        regdate,
        nic})
        .then(res=>{
            Response={
                code:0,
                message:'',
                result:res

            }
            return Response;
        })
        .catch(err =>{Response={
            code:1,
            message:err.original.sqlMessage,
            result:null

        }
        return Response;})

}

module.exports.updateUser = function(user, id){
    let{
        type,
        fname,
        lname,
        username,
        password,
        email,
        address,
        phone,
        regdate,
        nic
    } = user;
    return User.update({type,fname,
        lname,
        username,
        password,
        email,
        address,
        phone,
        regdate,
        nic,
    
    },{ where:{ id:id}})

        
        .then(res=>{Response={
            code:0,
            message:'',
            result:res

        }
        return Response;})

        .catch(err =>{console.log(err);})

}
module.exports.getAllUsers = function(){
    return User.findAll().then(res=>{Response={
        code:0,
        message:'',
        result:res

    }
    return Response;})

        .catch(err =>{console.log(err);})
}
module.exports.getUserbyUsername = function(data){
    return User.findAll({
        where:{username:data.username},
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

module.exports.deleteUser = function(id){
    return User.destroy({
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

module.exports.getUserbyID = function(id){
    return User.findOne({
        where:{ID:id},
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