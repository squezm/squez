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
  Comment.create({
    name: req.body.name,
    rating: req.body.rating,
    content: req.body.content
  })
  .then(res => {
    console.log(`Added to database: ${res}`);
  });

  res.send({redirect: '/'});

});

module.exports = router;
