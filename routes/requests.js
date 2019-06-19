var express = require('express');
var router = express.Router();
const requestservice = require('../services/requestService');

/* GET books listing. */

router.get('/:id', function(req, res, next) {
  requestservice.getRequestbyBookId(req.params.id).then(requests=>
    res.send(requests));
});
router.post('/', function(req, res, next) {
    console.log(req.body)
  requestservice.addRequest(req.body).then(requests=>
    res.send(requests));
});

router.delete('/:id', function(req, res, next) {
  requestservice.deleteRequest(req.params.id).then(requests=>
    res.send(requests));
});

module.exports = router;