const User = require("../models/userModel");
module.exports.loginUser= function(login){
    return User.findAll({ where: {
        username:login.username,password:login.password
      }}).then(res=>{Response={
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