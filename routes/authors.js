var express = require('express');
var router = express.Router();
const AuthorService = require('../services/authorService');

/* GET authors listing. */
router.get('/', function(req, res, next) {
  console.log(req.body)
  AuthorService.getAllAuthors().then(author=>
    res.send(author));
});
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', function(req, res, next) {
  console.log(req.body)
  AuthorService.addAuthor(req.body).then(author=>
    res.send(author));
});
router.put('/:id', function(req, res, next) {

  AuthorService.updateAuthor(req.body,req.params.id).then(authors=>
    res.send(authors));
  
});
router.delete('/:id', function(req, res, next) {
  AuthorService.deleteAuthor(req.params.id).then(authors=>
    res.send(authors));
 
});

module.exports = router;