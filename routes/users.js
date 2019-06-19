var express = require('express');
var router = express.Router();
const userservice = require('../services/userService');

/* GET users listing. */
router.get('/', function(req, res, next) {
  userservice.getAllUsers().then(users=>
    res.send(users));
});

router.get('/:id', function(req, res, next) {
  userservice.getUserbyID(req.params.id).then(users=>
    res.send(users));
});
router.post('/', function(req, res, next) {
  userservice.createUser(req.body).then(users=>
    res.send(users));
});
router.post('/uname', function(req, res, next) {
  console.log(req.body)
  userservice.getUserbyUsername(req.body).then(users=>
    res.send(users));
});

router.put('/:id', function(req, res, next) {
  userservice.updateUser(req.body,req.params.id).then(users=>
    res.send(users));
});
router.delete('/:id', function(req, res, next) {
  userservice.deleteUser(req.params.id).then(users=>
    res.send(users));
});

module.exports = router;
