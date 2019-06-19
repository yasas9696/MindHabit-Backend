var express = require('express');
var router = express.Router();
const mailservice = require('../services/mailService');

/* GET mails listing. */

router.post('/', function(req, res, next) {
  mailservice.createmail(req.body,info=>{
      console.log(info)
  })
});


module.exports = router;