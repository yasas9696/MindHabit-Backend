var express = require("express");
var router = express.Router();

var MailConfig = require("../config/email");
var hbs = require("nodemailer-express-handlebars");
var gmailTransport = MailConfig.GmailTransport;
var smtpTransport = MailConfig.SMTPTransport;

router.post("/email/template", (req, res, next) => {
  console.log(req.body)
  //MailConfig.ViewOption(gmailTransport, hbs);
  let HelperOptions = {
    from: '"Mind_Habit" <chamikarox99@gmail.com>',
    to: "chamikarox99@gmail.com",
    subject: "Complain message from mind-habit",
    text:'from:-'+ req.body.email +'_message:-'+ req.body.message,
    
    template: "test",
    context: {
      name: "Mind_Habit",
      email: "chamikarox99@gmail.com",
      address: "Colombo"
    }
  };
  gmailTransport.sendMail(HelperOptions, (error, info) => {         
    if (error) {
      console.log('dddfddggs')
      console.log(error);
      res.json(error);
    }
    console.log("email is send");
    console.log(info);
    res.json(info);
  });
});

router.get("/email/smtp/template", (req, res, next) => {
  MailConfig.ViewOption(smtpTransport, hbs);
  let HelperOptions = {
    from:  '"Mind_Habit" <chamikarox99@gmail.com>',
    to: "tariqul.islam.rony@gmail.com",
    subject: "Hellow world!",
    template: "test",
    context: {
      name: "tariqul_islam",
      email: "tariqul.islam.rony@gmail.com",
      address: "52, Kadamtola Shubag dhaka"
    }
  };
  smtpTransport.verify((error, success) => {
    if (error) {
      res.json({ output: "error", message: error });
      res.end();
    } else {
      smtpTransport.sendMail(HelperOptions, (error, info) => {
        if (error) {
          res.json({ output: "error", message: error });
        }
        res.json({ output: "success", message: info });
        res.end();
      });
    }
  });
});



router.post("/email/request", (req, res, next) => {
  //MailConfig.ViewOption(gmailTransport, hbs);
  let HelperOptions = {
    from:  '"Mind_Habit" <chamikarox99@gmail.com>',
    to: req.body.email,
    subject: "Book Availability",
    text: "'"+req.body.bookname+"'"+" is available now... Please visit the library and take your book",
    template: "test",
    context: {
      name: "tariqul_islam",
      email: "chamikarox99@gmail.com",
      address: "52, Kadamtola Shubag dhaka"
    }
  };
  gmailTransport.sendMail(HelperOptions, (error, info) => {
    if (error) {
      console.log('dddfddggs')
      console.log(error);
      res.json(error);
    }
    console.log("email is send");
    console.log(info);
    res.json(info);
  });
});

module.exports = router;
