var express = require('express');
var router = express.Router();
const borrowservice = require('../services/borrowService');

/* GET books listing. */
router.get('/', function(req, res, next) {

    borrowservice.getAllBorrowBooks().then(borrows=>
    res.send(borrows));
});
router.get('/:id', function(req, res, next) {
  borrowservice.getBorrowBooksByUserId(req.params.id).then(borrows=>
    res.send(borrows));
});
router.post('/', function(req, res, next) {
  console.log(req.body)
    borrowservice.addBorrowBook(req.body).then(borrows=>
    res.send(borrows));
});
router.put('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.delete('/:id', function(req, res, next) {
  borrowservice.deleteBook(req.params.id).then(borrows=>
    res.send(borrows));
});

module.exports = router;