var nodemailer = require('nodemailer');


module.exports.createmail = async function(user, callback){
    var transporter = nodemailer.createTransport({host:'smtp.gmail.com',port:587,secure:true ,auth:{user:'chamikarox99@gmail.com'},pass:'chamikarox'})
    var mailOptions= {from:'chamikarox99@gmail.com', to :'yasas9696@gmail.com',subject:'hello', text:'hello hello'}

    let info = await transporter.sendMail(mailOptions)
    callback(info)
}

