var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('CommentModel');

router.get('/', (req, res, next) => {
  Comment
  .find({}, (err, results) => {
    if (err) return err;
    console.log(results);
    res.json(results);
  });
});

router.post('/', function(req, res, next) {
/*  var comment = new Comment({
    name: req.body.name,
    rating: req.body.rating,
    content: req.body.content
  });
  comment.save(function(err, comment) {
    if (err) {return next(err)}
    res.json(201, comment);
  });*/
  /*Comment.create({
    name: req.body.name,
    rating: req.body.rating,
    content: req.body.content
  });*/
  Comment.create({
    name: "Name",
    rating: 3,
    content: "Content"
  });
});

module.exports = router;
