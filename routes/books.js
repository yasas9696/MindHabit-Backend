var express = require('express');
var router = express.Router();
const bookservice = require('../services/bookService');

/* GET books listing. */
router.get('/', function(req, res, next) {
  bookservice.getAllBooks().then(books=>
    res.send(books));
});
router.get('/:id', function(req, res, next) {
  bookservice.getBookbyId(req.params.id).then(books=>
    res.send(books));
});
router.post('/', function(req, res, next) {
  bookservice.addBook(req.body).then(books=>
    res.send(books));
});
router.put('/:id', function(req, res, next) {
  bookservice.updateBook(req.body,req.params.id).then(books=>
    res.send(books));
});
router.delete('/:id', function(req, res, next) {
  bookservice.deleteBook(req.params.id).then(books=>
    res.send(books));
});

module.exports = router;

