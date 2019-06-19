var express = require('express');
var router = express.Router();
const userservice = require('../services/loginService');

/* GET users listing. */

router.post('/', function(req, res, next) {
  userservice.loginUser(req.body).then(logins=>
    res.send(logins));
});


module.exports = router;