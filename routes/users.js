var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var UserModel = mongoose.model('UserModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  /*
  var today = Date.now()
  UserModel.create({
    username: 'markandtiff18',
    age: 22,
    date_joined: today
  });*/


  UserModel
  .find({'username': 'markandtiff18'}, function(err, results){
    if (err) return err;
    console.log(results);
    res.json(results);
  });

  /*res.json([{
    id: 1,
    username: 'tiffv'
  }, {
    id: 2,
    username: 'dexter_douglas'
  }, {
    id: 3,
    username: 'iamsquez'
  }
]);
*/

});

module.exports = router;
